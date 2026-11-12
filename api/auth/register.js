const {
  getConfig,
  json,
  readBody,
  getIp,
  normalizeEmail,
  normalizePhone,
  normalizeUsername,
  usernameFromContact,
  isReservedEmail,
  credentialEmail,
  listUsers,
  findByContact,
  findByUsername,
  createUser,
  profileOf,
  signSession,
  rateLimitHit,
  fail,
} = require("../_lib/auth");

module.exports = async (req, res) => {
  if (req.method !== "POST") return fail(res, 405, "method_not_allowed");
  const cfg = getConfig();
  if (!cfg) return fail(res, 503, "not_configured");

  let body;
  try {
    body = await readBody(req);
  } catch (error) {
    return fail(res, 400, error.message === "body_too_large" ? "body_too_large" : "invalid_json");
  }

  if (rateLimitHit(`register:${getIp(req)}`, 8, 30 * 60 * 1000)) {
    return fail(res, 429, "rate_limited");
  }

  const name = String(body.name || "").trim().slice(0, 80);
  if (name.length < 2) return fail(res, 400, "invalid_name");

  const rawContact = String(body.contact || "").trim();
  if (!rawContact) return fail(res, 400, "invalid_contact");
  let contactType;
  let contact;
  if (rawContact.includes("@")) {
    contact = normalizeEmail(rawContact);
    if (!contact) return fail(res, 400, "invalid_email");
    contactType = "email";
  } else {
    contact = normalizePhone(rawContact);
    if (!contact) return fail(res, 400, "invalid_phone");
    contactType = "phone";
  }
  if (contactType === "email" && isReservedEmail(contact)) {
    return fail(res, 400, "invalid_email");
  }

  const password = String(body.password || "");
  if (password.length < 8 || password.length > 128) {
    return fail(res, 400, "weak_password");
  }

  try {
    const users = await listUsers(cfg, { fresh: true });
    if (
      findByContact(users, contactType, contact) ||
      (contactType === "email" &&
        users.some((user) => String(user.email || "").toLowerCase() === contact))
    ) {
      return fail(res, 409, "contact_exists");
    }

    const requestedUsername = normalizeUsername(body.username);
    if (body.username && !requestedUsername) return fail(res, 400, "invalid_username");

    let username = requestedUsername || usernameFromContact(contactType, contact);
    if (requestedUsername) {
      if (findByUsername(users, username)) return fail(res, 409, "username_exists");
    } else {
      let suffix = 1;
      while (findByUsername(users, username)) {
        suffix += 1;
        username = `${usernameFromContact(contactType, contact).slice(0, 18 - String(suffix).length)}${suffix}`;
      }
    }

    const created = await createUser(cfg, {
      email: credentialEmail(contactType, contact),
      password,
      name,
      username,
      contact,
      contactType,
    });
    if (created.conflict) return fail(res, 409, "contact_exists");

    const account = profileOf(created.user);
    return json(res, 200, {
      token: signSession(cfg, account),
      account,
    });
  } catch (error) {
    console.error("register failed", error.message);
    return fail(res, 500, "server_error");
  }
};
