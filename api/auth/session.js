const { getConfig, json, requireAccount, fail } = require("../_lib/auth");

module.exports = async (req, res) => {
  if (req.method !== "GET") return fail(res, 405, "method_not_allowed");
  const cfg = getConfig();
  if (!cfg) return fail(res, 503, "not_configured");

  try {
    const session = await requireAccount(req, cfg);
    if (!session) return fail(res, 401, "invalid_session");
    return json(res, 200, { account: session.account });
  } catch (error) {
    console.error("session failed", error.message);
    return fail(res, 500, "server_error");
  }
};
