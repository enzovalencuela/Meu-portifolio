import { prisma } from "../lib/prisma.js";

function sendJson(res, statusCode, data) {
  res.status(statusCode).setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(data));
}

const SUPPORTED_LOCALES = new Set(["pt", "en", "es", "de", "it"]);

function validatePayload(body) {
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const project = typeof body?.project === "string" ? body.project.trim() : "";
  const locale = typeof body?.locale === "string" ? body.locale.trim().toLowerCase() : "";

  const errors = [];

  if (name.length < 2 || name.length > 80) {
    errors.push("INVALID_NAME");
  }

  if (message.length < 10 || message.length > 800) {
    errors.push("INVALID_MESSAGE");
  }

  if (project && project.length > 120) {
    errors.push("INVALID_PROJECT");
  }

  if (locale && !SUPPORTED_LOCALES.has(locale)) {
    errors.push("INVALID_LOCALE");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: {
      name,
      message,
      project: project || null,
      locale: locale || null,
    },
  };
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const requestedLocale =
        typeof req.query?.locale === "string" ? req.query.locale.toLowerCase() : "";
      const locale = SUPPORTED_LOCALES.has(requestedLocale) ? requestedLocale : null;

      const select = {
        id: true,
        name: true,
        message: true,
        project: true,
        locale: true,
        createdAt: true,
      };

      if (!locale) {
        const feedbacks = await prisma.feedback.findMany({
          where: { status: "APPROVED" },
          orderBy: { createdAt: "desc" },
          select,
        });

        return sendJson(res, 200, { feedbacks });
      }

      const [preferred, fallback] = await Promise.all([
        prisma.feedback.findMany({
          where: { status: "APPROVED", locale },
          orderBy: { createdAt: "desc" },
          select,
        }),
        prisma.feedback.findMany({
          where: {
            status: "APPROVED",
            OR: [{ locale: null }, { locale: { not: locale } }],
          },
          orderBy: { createdAt: "desc" },
          select,
        }),
      ]);

      return sendJson(res, 200, { feedbacks: [...preferred, ...fallback] });
    } catch (error) {
      console.error("GET /api/feedbacks failed:", error);
      return sendJson(res, 500, { error: "LOAD_FAILED" });
    }
  }

  if (req.method === "POST") {
    try {
      const payload = validatePayload(req.body);

      if (!payload.valid) {
        return sendJson(res, 400, { errors: payload.errors });
      }

      const created = await prisma.feedback.create({
        data: {
          ...payload.data,
          status: "PENDING",
        },
        select: {
          id: true,
          name: true,
          message: true,
          project: true,
          locale: true,
          status: true,
          createdAt: true,
        },
      });

      return sendJson(res, 201, {
        message: "SUBMITTED",
        feedback: created,
      });
    } catch (error) {
      console.error("POST /api/feedbacks failed:", error);
      return sendJson(res, 500, { error: "SUBMIT_FAILED" });
    }
  }

  res.setHeader("Allow", "GET, POST");
  return sendJson(res, 405, { error: "METHOD_NOT_ALLOWED" });
}
