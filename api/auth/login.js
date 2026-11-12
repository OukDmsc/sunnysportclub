const {
  getConfig,
  json,
  readBody,
  getIp,
  findUserByIdentifier,
  profileOf,
  signInWithPassword,
  signSession,
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
  const password = String(body.password || "");
  if (!identifier || !password) return fail(res, 400, "missing_credentials");

  const bucketKey = `login:${getIp(req)}:${identifier.toLowerCase()}`;
  if (rateLimitHit(bucketKey, 12, 10 * 60 * 1000)) {
    return fail(res, 429, "rate_limited");
  }

  try {
    const user = await findUserByIdentifier(cfg, identifier);
    if (!user?.email) {
      return fail(res, 401, "invalid_credentials");
    }
    const valid = await signInWithPassword(cfg, user.email, password);
    if (!valid) return fail(res, 401, "invalid_credentials");

    resetRateLimit(bucketKey);
    const account = profileOf(user);
    return json(res, 200, {
      token: signSession(cfg, account),
      account,
    });
  } catch (error) {
    console.error("login failed", error.message);
    return fail(res, 500, "server_error");
  }
};
