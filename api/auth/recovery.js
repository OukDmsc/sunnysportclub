const {
  getConfig,
  json,
  readBody,
  requireAccount,
  updateUser,
  profileOf,
  hashRecoveryCode,
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

  const code = String(body.code || "").trim();
  if (code.length < 8 || code.length > 64) return fail(res, 400, "invalid_recovery_code");

  try {
    const session = await requireAccount(req, cfg);
    if (!session) return fail(res, 401, "invalid_session");

    const result = await updateUser(cfg, session.user.id, {
      appMetadata: {
        recoveryHash: await hashRecoveryCode(code),
        recoveryUpdatedAt: new Date().toISOString(),
      },
    });
    return json(res, 200, { account: profileOf(result) });
  } catch (error) {
    console.error("recovery code update failed", error.message);
    return fail(res, 500, "server_error");
  }
};
