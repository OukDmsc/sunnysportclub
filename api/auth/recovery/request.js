const crypto = require("node:crypto");
const {
  getConfig,
  getInfobipConfig,
  json,
  readBody,
  getIp,
  findUserByIdentifier,
  profileOf,
  updateUser,
  hashSmsRecoveryCode,
  sendInfobipSms,
  rateLimitHit,
  fail,
} = require("../../_lib/auth");

const CODE_LIFETIME_MS = 10 * 60 * 1000;
const RESEND_DELAY_MS = 60 * 1000;

module.exports = async (req, res) => {
  if (req.method !== "POST") return fail(res, 405, "method_not_allowed");
  const cfg = getConfig();
  const infobip = getInfobipConfig();
  if (!cfg || !infobip) return fail(res, 503, "not_configured");

  let body;
  try {
    body = await readBody(req);
  } catch (error) {
    return fail(res, 400, error.message === "body_too_large" ? "body_too_large" : "invalid_json");
  }

  const identifier = String(body.identifier || "").trim();
  if (!identifier || identifier.length > 254) return fail(res, 400, "invalid_identifier");
  if (rateLimitHit(`sms-recovery:${getIp(req)}`, 6, 15 * 60 * 1000)) {
    return fail(res, 429, "rate_limited");
  }

  try {
    const user = await findUserByIdentifier(cfg, identifier);
    const account = user ? profileOf(user) : null;
    const phone = account?.phone || "";
    if (!user || !phone) return json(res, 200, { ok: true });

    const now = Date.now();
    const lastSentAt = Number(user.app_metadata?.smsRecoverySentAt) || 0;
    if (now - lastSentAt < RESEND_DELAY_MS) return json(res, 200, { ok: true });

    const code = String(crypto.randomInt(100000, 1000000));
    const recoveryHash = hashSmsRecoveryCode(cfg, user.id, code);
    await updateUser(cfg, user.id, {
      appMetadata: {
        smsRecoveryHash: recoveryHash,
        smsRecoveryExpiresAt: now + CODE_LIFETIME_MS,
        smsRecoverySentAt: now,
      },
    });

    let response;
    try {
      response = await sendInfobipSms(
        infobip,
        phone,
        `Your Sunny Sport Club password reset code is ${code}. It expires in 10 minutes.`,
      );
    } catch (error) {
      console.error("Infobip password recovery request failed.", error.name || "network_error");
      await updateUser(cfg, user.id, {
        appMetadata: { smsRecoveryHash: null, smsRecoveryExpiresAt: null },
      });
      return json(res, 200, { ok: true });
    }

    if (!response.ok) {
      console.error("Infobip password recovery request failed.", `http_${response.status}`);
      await updateUser(cfg, user.id, {
        appMetadata: { smsRecoveryHash: null, smsRecoveryExpiresAt: null },
      });
    }
    return json(res, 200, { ok: true });
  } catch (error) {
    console.error("SMS password recovery request failed.", error.message);
    return fail(res, 500, "server_error");
  }
};
