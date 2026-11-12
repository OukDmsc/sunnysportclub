const {
  getConfig,
  json,
  readBody,
  requireAccount,
  getUser,
  updateUser,
  profileOf,
  isAdminAccount,
  coachTeams,
  fail,
} = require("../../_lib/auth");

const MANAGEMENT_ROLES = new Set(["Coach", "Captain", "Team Manager"]);

module.exports = async (req, res) => {
  if (req.method !== "PATCH") return fail(res, 405, "method_not_allowed");
  const cfg = getConfig();
  if (!cfg) return fail(res, 503, "not_configured");

  const id = String(req.query?.id || "").trim();
  if (!id) return fail(res, 400, "missing_account");

  let body;
  try {
    body = await readBody(req);
  } catch (error) {
    return fail(res, 400, error.message === "body_too_large" ? "body_too_large" : "invalid_json");
  }

  try {
    const session = await requireAccount(req, cfg);
    if (!session) return fail(res, 401, "invalid_session");
    const caller = session.account;

    const targetUser = await getUser(cfg, id);
    if (!targetUser) return fail(res, 404, "account_not_found");
    const target = profileOf(targetUser);
    if (target.systemRole === "owner") return fail(res, 403, "not_allowed");

    if (body.systemRole !== undefined) {
      if (caller.systemRole !== "owner") return fail(res, 403, "not_allowed");
      if (target.id === caller.id) return fail(res, 403, "not_allowed");
      const nextRole = String(body.systemRole);
      if (!["viewer", "admin", "developer"].includes(nextRole)) {
        return fail(res, 400, "invalid_role");
      }
      const updated = await updateUser(cfg, id, { appMetadata: { systemRole: nextRole } });
      return json(res, 200, { account: profileOf(updated) });
    }

    const teamId = String(body.teamId || "");
    const requestedRole = String(body.teamRole || "Viewer");
    if (!teamId) return fail(res, 400, "missing_team");

    const admin = isAdminAccount(caller);
    if (!admin && !coachTeams(caller).includes(teamId)) return fail(res, 403, "not_allowed");
    if (!admin && isAdminAccount(target)) return fail(res, 403, "not_allowed");
    if (target.id === caller.id && !admin) return fail(res, 403, "not_allowed");

    const nextRole = MANAGEMENT_ROLES.has(requestedRole) ? requestedRole : "";
    if (nextRole === "Coach" && !admin) return fail(res, 403, "not_allowed");

    const teamRoles = { ...target.teamRoles };
    if (nextRole) teamRoles[teamId] = nextRole;
    else delete teamRoles[teamId];

    const otherTeam = Object.entries(teamRoles).find(
      ([otherTeamId, role]) => otherTeamId !== teamId && MANAGEMENT_ROLES.has(role),
    );
    if (nextRole && otherTeam) return fail(res, 409, "team_role_limit");

    const updated = await updateUser(cfg, id, {
      appMetadata: {
        teamRoles,
        teamCreationRole: "",
        teamCreationUsed: nextRole ? true : target.teamCreationUsed,
      },
    });
    return json(res, 200, { account: profileOf(updated) });
  } catch (error) {
    console.error("account update failed", error.message);
    return fail(res, 500, "server_error");
  }
};
