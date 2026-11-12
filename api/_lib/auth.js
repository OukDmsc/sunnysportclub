const crypto = require("node:crypto");

const SESSION_LIFETIME_SECONDS = 60 * 60 * 24 * 30;
const STAFF_EMAIL_DOMAIN = "staff.sunnyclub.app";
const PHONE_EMAIL_DOMAIN = "phone.sunnyclub.app";
const EMAIL_PATTERN =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;
const PHONE_PATTERN = /^\+?[1-9]\d{7,14}$/;
const USERNAME_PATTERN = /^[a-zA-Z0-9._-]{3,24}$/;
const SYSTEM_ROLES = new Set(["owner", "admin", "developer", "viewer"]);
const TEAM_ROLES = new Set(["Coach", "Captain", "Team Manager"]);

const usersCache = { at: 0, users: null };
const rateBuckets = new Map();

function getConfig() {
  const url = (process.env.SUPABASE_URL || "").replace(/\/+$/, "");
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const authSecret = process.env.AUTH_SECRET || "";
  if (!url || !serviceKey || !authSecret) return null;
  return {
    url,
    serviceKey,
    authSecret,
    anonKey: process.env.SUPABASE_ANON_KEY || serviceKey,
  };
}

function json(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  if (req.body !== undefined) {
    if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
      return Promise.resolve(req.body);
    }
    try {
      const text = Buffer.isBuffer(req.body) ? req.body.toString("utf8") : String(req.body);
      return Promise.resolve(text ? JSON.parse(text) : {});
    } catch {
      return Promise.reject(new Error("invalid_json"));
    }
  }
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 100000) {
        reject(new Error("body_too_large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("invalid_json"));
      }
    });
    req.on("error", reject);
  });
}

function getIp(req) {
  const forwarded = String(req.headers["x-forwarded-for"] || "");
  return forwarded.split(",")[0].trim() || req.socket?.remoteAddress || "unknown";
}

function normalizeEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) return "";
  const [localPart, domain] = email.split("@");
  if (localPart.length > 64 || /^\.|\.\.|\.$/.test(localPart)) return "";
  if (!/^[a-z]{2,}$/.test(domain.split(".").pop())) return "";
  return email;
}

function normalizePhone(value) {
  const compact = String(value || "").trim().replace(/[\s().-]/g, "");
  if (!PHONE_PATTERN.test(compact)) return "";
  return compact.startsWith("+") ? compact : `+${compact}`;
}

function normalizeUsername(value) {
  const username = String(value || "").trim();
  return USERNAME_PATTERN.test(username) ? username : "";
}

function usernameFromContact(contactType, contact) {  const raw = contactType === "email" ? contact.split("@")[0] : contact.replace(/\D/g, "");
  let base = raw.toLowerCase().replace(/[^a-z0-9._-]/g, "").slice(0, 18) || "member";
  if (base.length < 3) base = `${base}fan`.slice(0, 18);
  return base;
}

async function hashRecoveryCode(code) {
  const salt = crypto.randomBytes(16).toString("hex");
  const derived = await new Promise((resolve, reject) => {
    crypto.scrypt(String(code), salt, 32, (error, key) => {
      if (error) reject(error);
      else resolve(key);
    });
  });
  return `scrypt$${salt}$${derived.toString("hex")}`;
}

async function verifyRecoveryCode(code, stored) {
  const [scheme, salt, hash] = String(stored || "").split("$");
  if (scheme !== "scrypt" || !salt || !hash) return false;
  const expected = Buffer.from(hash, "hex");
  if (expected.length !== 32) return false;
  let derived;
  try {
    derived = await new Promise((resolve, reject) => {
      crypto.scrypt(String(code), salt, 32, (error, key) => {
        if (error) reject(error);
        else resolve(key);
      });
    });
  } catch {
    return false;
  }
  return derived.length === expected.length && crypto.timingSafeEqual(derived, expected);
}

function isReservedEmail(email) {
  return email.endsWith(`@${STAFF_EMAIL_DOMAIN}`) || email.endsWith(`@${PHONE_EMAIL_DOMAIN}`);
}

function credentialEmail(contactType, contact) {
  return contactType === "email"
    ? contact
    : `${contact.replace(/\D/g, "")}@${PHONE_EMAIL_DOMAIN}`;
}

function authHeaders(cfg) {
  return {
    apikey: cfg.serviceKey,
    Authorization: `Bearer ${cfg.serviceKey}`,
    "Content-Type": "application/json",
  };
}

async function authRequest(cfg, path, options = {}) {
  const response = await fetch(`${cfg.url}/auth/v1${path}`, {
    method: options.method || "GET",
    headers: { ...authHeaders(cfg), ...(options.headers || {}) },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }
  return { status: response.status, ok: response.ok, data };
}

async function listUsers(cfg, { fresh = false } = {}) {
  if (!fresh && usersCache.users && Date.now() - usersCache.at < 8000) {
    return usersCache.users;
  }
  const users = [];
  for (let page = 1; page <= 20; page += 1) {
    const result = await authRequest(
      cfg,
      `/admin/users?page=${page}&per_page=1000`,
    );
    if (!result.ok || !Array.isArray(result.data?.users)) {
      throw new Error("supabase_list_failed");
    }
    users.push(...result.data.users);
    if (result.data.users.length < 1000) break;
  }
  usersCache.users = users;
  usersCache.at = Date.now();
  return users;
}

function invalidateUsers() {
  usersCache.users = null;
  usersCache.at = 0;
}

function metadataOf(user) {
  return user?.user_metadata && typeof user.user_metadata === "object"
    ? user.user_metadata
    : {};
}

function appMetadataOf(user) {
  return user?.app_metadata && typeof user.app_metadata === "object"
    ? user.app_metadata
    : {};
}

function profileOf(user) {
  const meta = metadataOf(user);
  const app = appMetadataOf(user);
  const teamRoles = {};
  if (app.teamRoles && typeof app.teamRoles === "object") {
    for (const [teamId, role] of Object.entries(app.teamRoles)) {
      if (typeof teamId === "string" && TEAM_ROLES.has(role)) teamRoles[teamId] = role;
    }
  }
  const contactType = meta.contact_type === "phone" ? "phone" : meta.contact_type === "email" ? "email" : "";
  const contact = typeof meta.contact === "string" ? meta.contact : "";
  return {
    id: user.id,
    username: typeof meta.username === "string" ? meta.username : "",
    name: typeof meta.name === "string" ? meta.name : "",
    contactType,
    contact,
    email: contactType === "email" ? contact : "",
    phone: contactType === "phone" ? contact : "",
    systemRole: SYSTEM_ROLES.has(app.systemRole) ? app.systemRole : "viewer",
    teamRoles,
    teamCreationRole: app.teamCreationRole === "Coach" ? "Coach" : "",
    teamCreationUsed: Boolean(app.teamCreationUsed),
    contactVerified: Boolean(app.contactVerified),
    hasRecovery: Boolean(app.recoveryHash),
    createdAt: user.created_at || "",
  };
}

function publicAccount(user, { withContact = false } = {}) {
  const profile = profileOf(user);
  return {
    id: profile.id,
    username: profile.username,
    name: profile.name,
    email: withContact ? profile.email : "",
    phone: withContact ? profile.phone : "",
    systemRole: profile.systemRole,
    teamRoles: profile.teamRoles,
    teamCreationRole: profile.teamCreationRole,
    teamCreationUsed: profile.teamCreationUsed,
    contactVerified: profile.contactVerified,
    hasRecovery: profile.hasRecovery,
  };
}

function findByUsername(users, username) {
  const wanted = username.toLowerCase();
  return users.find((user) => profileOf(user).username.toLowerCase() === wanted) || null;
}

function findByContact(users, contactType, contact) {
  return (
    users.find((user) => {
      const profile = profileOf(user);
      return profile.contactType === contactType && profile.contact === contact;
    }) || null
  );
}

async function findUserByIdentifier(cfg, identifier) {
  const users = await listUsers(cfg);
  const value = String(identifier || "").trim();
  if (!value) return null;
  const byUsername = findByUsername(users, value);
  if (byUsername) return byUsername;
  if (value.includes("@")) {
    const email = normalizeEmail(value);
    if (!email) return null;
    return users.find((user) => String(user.email || "").toLowerCase() === email) || null;
  }
  const phone = normalizePhone(value);
  if (!phone) return null;
  const byPhone = findByContact(users, "phone", phone);
  if (byPhone) return byPhone;
  const email = credentialEmail("phone", phone);
  return users.find((user) => String(user.email || "").toLowerCase() === email) || null;
}

async function createUser(cfg, { email, password, name, username, contact, contactType, appMeta }) {
  const result = await authRequest(cfg, "/admin/users", {
    method: "POST",
    body: {
      email,
      password,
      email_confirm: true,
      user_metadata: {
        name,
        username,
        contact: contact || "",
        contact_type: contactType || "",
      },
      app_metadata: {
        systemRole: "viewer",
        teamRoles: {},
        teamCreationRole: "",
        teamCreationUsed: false,
        contactVerified: false,
        ...(appMeta || {}),
      },
    },
  });
  invalidateUsers();
  if (!result.ok) {
    const code = String(result.data?.code || result.data?.error_code || "");
    const message = String(result.data?.msg || result.data?.message || "");
    if (result.status === 422 || /already|exist|duplicate/i.test(`${code} ${message}`)) {
      return { conflict: true };
    }
    throw new Error(`supabase_create_failed_${result.status}`);
  }
  return { user: result.data };
}

async function getUser(cfg, id) {
  const result = await authRequest(cfg, `/admin/users/${encodeURIComponent(id)}`);
  if (result.status === 404) return null;
  if (!result.ok) throw new Error(`supabase_get_failed_${result.status}`);
  return result.data;
}

async function updateUser(cfg, id, patch) {
  const current = await getUser(cfg, id);
  if (!current) return null;
  const body = {};
  if (patch.userMetadata) {
    body.user_metadata = { ...metadataOf(current), ...patch.userMetadata };
  }
  if (patch.appMetadata) {
    body.app_metadata = { ...appMetadataOf(current), ...patch.appMetadata };
  }
  if (patch.password) {
    if (String(patch.password).length < 8) throw new Error("weak_password");
    body.password = String(patch.password);
  }
  const result = await authRequest(cfg, `/admin/users/${encodeURIComponent(id)}`, {
    method: "PUT",
    body,
  });
  invalidateUsers();
  if (!result.ok) throw new Error(`supabase_update_failed_${result.status}`);
  return result.data;
}

async function signInWithPassword(cfg, email, password) {
  const response = await fetch(`${cfg.url}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      apikey: cfg.anonKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.ok;
}

function base64url(value) {
  return Buffer.from(value).toString("base64url");
}

function signSession(cfg, account) {
  const header = base64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const issuedAt = Math.floor(Date.now() / 1000);
  const payload = base64url(
    JSON.stringify({
      sub: account.id,
      usr: account.username,
      iat: issuedAt,
      exp: issuedAt + SESSION_LIFETIME_SECONDS,
    }),
  );
  const signature = crypto
    .createHmac("sha256", cfg.authSecret)
    .update(`${header}.${payload}`)
    .digest("base64url");
  return `${header}.${payload}.${signature}`;
}

function verifySession(cfg, token) {
  const parts = String(token || "").split(".");
  if (parts.length !== 3) return null;
  const [header, payload, signature] = parts;
  const expected = crypto
    .createHmac("sha256", cfg.authSecret)
    .update(`${header}.${payload}`)
    .digest();
  let provided;
  try {
    provided = Buffer.from(signature, "base64url");
  } catch {
    return null;
  }
  if (provided.length !== expected.length || !crypto.timingSafeEqual(provided, expected)) {
    return null;
  }
  try {
    const claims = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!claims?.sub || typeof claims.exp !== "number") return null;
    if (claims.exp < Math.floor(Date.now() / 1000)) return null;
    return claims;
  } catch {
    return null;
  }
}

async function requireAccount(req, cfg) {
  const header = String(req.headers.authorization || "");
  const token = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
  if (!token) return null;
  const claims = verifySession(cfg, token);
  if (!claims) return null;
  const user = await getUser(cfg, claims.sub);
  if (!user) return null;
  return { user, account: profileOf(user) };
}

function isAdminAccount(account) {
  return ["owner", "admin", "developer"].includes(account.systemRole);
}

function isStaffAccount(account) {
  return isAdminAccount(account) || Object.keys(account.teamRoles).length > 0;
}

function coachTeams(account) {
  return Object.entries(account.teamRoles)
    .filter(([, role]) => role === "Coach")
    .map(([teamId]) => teamId);
}

function rateLimitHit(key, limit, windowMs) {
  const now = Date.now();
  const bucket = rateBuckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    if (rateBuckets.size > 5000) {
      for (const [entryKey, entry] of rateBuckets) {
        if (entry.resetAt <= now) rateBuckets.delete(entryKey);
      }
    }
    return false;
  }
  bucket.count += 1;
  return bucket.count > limit;
}

function resetRateLimit(key) {
  rateBuckets.delete(key);
}

function fail(res, status, error, extra = {}) {
  return json(res, status, { error, ...extra });
}

module.exports = {
  STAFF_EMAIL_DOMAIN,
  PHONE_EMAIL_DOMAIN,
  SYSTEM_ROLES,
  TEAM_ROLES,
  USERNAME_PATTERN,
  getConfig,
  json,
  readBody,
  getIp,
  normalizeEmail,
  normalizePhone,
  normalizeUsername,
  usernameFromContact,
  hashRecoveryCode,
  verifyRecoveryCode,
  isReservedEmail,
  credentialEmail,
  listUsers,
  invalidateUsers,
  findByUsername,
  findByContact,
  findUserByIdentifier,
  createUser,
  getUser,
  updateUser,
  signInWithPassword,
  profileOf,
  publicAccount,
  signSession,
  verifySession,
  requireAccount,
  isAdminAccount,
  isStaffAccount,
  coachTeams,
  rateLimitHit,
  resetRateLimit,
  fail,
};
