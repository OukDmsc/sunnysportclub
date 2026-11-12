const {
  getConfig,
  json,
  readBody,
  getIp,
  findUserByIdentifier,
  updateUser,
  verifyRecoveryCode,
  rateLimitHit,
  resetRateLimit,
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

  const identifier = String(body.identifier || "").trim();
  const code = String(body.code || "").trim();
  const password = String(body.password || "");
  if (!identifier || !code) return fail(res, 400, "missing_credentials");
  if (code.length > 64) return fail(res, 400, "invalid_recovery_code");
  if (password.length < 8 || password.length > 128) return fail(res, 400, "weak_password");

  const bucketKey = `recover:${getIp(req)}:${identifier.toLowerCase()}`;
  if (rateLimitHit(bucketKey, 8, 15 * 60 * 1000)) {
    return fail(res, 429, "rate_limited");
  }

  try {
    const user = await findUserByIdentifier(cfg, identifier);
    if (!user) return fail(res, 401, "invalid_recovery");
    const stored = user.app_metadata?.recoveryHash;
    const valid = await verifyRecoveryCode(code, stored);
    if (!valid) return fail(res, 401, "invalid_recovery");

    await updateUser(cfg, user.id, { password });
    resetRateLimit(bucketKey);
    return json(res, 200, { ok: true });
  } catch (error) {
    console.error("account recovery failed", error.message);
    return fail(res, 500, "server_error");
  }
};
