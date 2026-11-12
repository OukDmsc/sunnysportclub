const {
  STAFF_EMAIL_DOMAIN,
  getConfig,
  json,
  readBody,
  requireAccount,
  listUsers,
  findByUsername,
  createUser,
  publicAccount,
  isAdminAccount,
  isStaffAccount,
  coachTeams,
  fail,
} = require("../../_lib/auth");

function validateUsername(value) {
  const username = String(value || "").trim();
  return /^[a-zA-Z0-9._-]{3,24}$/.test(username) ? username : "";
}

async function list(req, res, cfg) {
  const session = await requireAccount(req, cfg);
  if (!session) return fail(res, 401, "invalid_session");
  if (!isStaffAccount(session.account)) return fail(res, 403, "not_allowed");
  const users = await listUsers(cfg, { fresh: true });
  const withContact = isAdminAccount(session.account);
  return json(res, 200, {
    accounts: users.map((user) => publicAccount(user, { withContact })),
  });
}

async function create(req, res, cfg) {
  const session = await requireAccount(req, cfg);
  if (!session) return fail(res, 401, "invalid_session");
  const caller = session.account;
  const admin = isAdminAccount(caller);

  let body;
  try {
    body = await readBody(req);
  } catch (error) {
    return fail(res, 400, error.message === "body_too_large" ? "body_too_large" : "invalid_json");
  }

  const username = validateUsername(body.username);
  if (!username) return fail(res, 400, "invalid_username");
  const password = String(body.password || "");
  if (password.length < 8 || password.length > 128) return fail(res, 400, "weak_password");

  const requestedSystemRole = ["admin", "developer", "viewer"].includes(body.systemRole)
    ? body.systemRole
    : "viewer";
  if (!admin && requestedSystemRole !== "viewer") return fail(res, 403, "not_allowed");
  if (requestedSystemRole !== "viewer" && caller.systemRole !== "owner") {
    return fail(res, 403, "not_allowed");
  }

  const teamId = String(body.teamId || "");
  const teamRole = ["Coach", "Captain", "Team Manager"].includes(body.teamRole)
    ? body.teamRole
    : "";
  const teamCreationRole = body.teamCreationRole === "Coach" ? "Coach" : "";

  if (!admin) {
    if (!teamId || !coachTeams(caller).includes(teamId)) return fail(res, 403, "not_allowed");
    if (!["Captain", "Team Manager"].includes(teamRole)) return fail(res, 403, "not_allowed");
    if (teamCreationRole) return fail(res, 403, "not_allowed");
  }
  if (teamRole && teamCreationRole) return fail(res, 400, "invalid_role");
  if (teamRole && requestedSystemRole !== "viewer") return fail(res, 400, "invalid_role");
  if (teamRole === "Coach" && !admin) return fail(res, 403, "not_allowed");

  try {
    const users = await listUsers(cfg, { fresh: true });
    if (findByUsername(users, username)) return fail(res, 409, "username_exists");

    const created = await createUser(cfg, {
      email: `${username.toLowerCase()}@${STAFF_EMAIL_DOMAIN}`,
      password,
      name: "",
      username,
      contact: "",
      contactType: "",
      appMeta: {
        systemRole: requestedSystemRole,
        teamRoles: teamId && teamRole ? { [teamId]: teamRole } : {},
        teamCreationRole,
        teamCreationUsed: Boolean(teamId && teamRole),
        contactVerified: false,
      },
    });
    if (created.conflict) return fail(res, 409, "username_exists");
    return json(res, 200, { account: publicAccount(created.user, { withContact: admin }) });
  } catch (error) {
    console.error("account create failed", error.message);
    return fail(res, 500, "server_error");
  }
}

module.exports = async (req, res) => {
  const cfg = getConfig();
  if (!cfg) return fail(res, 503, "not_configured");
  try {
    if (req.method === "GET") return await list(req, res, cfg);
    if (req.method === "POST") return await create(req, res, cfg);
    return fail(res, 405, "method_not_allowed");
  } catch (error) {
    console.error("accounts failed", error.message);
    return fail(res, 500, "server_error");
  }
};
