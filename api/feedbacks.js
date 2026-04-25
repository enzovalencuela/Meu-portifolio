import { prisma } from "../lib/prisma.js";

function sendJson(res, statusCode, data) {
  res.status(statusCode).setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(data));
}

function validatePayload(body) {
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const project = typeof body?.project === "string" ? body.project.trim() : "";

  const errors = [];

  if (name.length < 2 || name.length > 80) {
    errors.push("O nome deve ter entre 2 e 80 caracteres.");
  }

  if (message.length < 10 || message.length > 800) {
    errors.push("O feedback deve ter entre 10 e 800 caracteres.");
  }

  if (project && project.length > 120) {
    errors.push("O nome do projeto deve ter no maximo 120 caracteres.");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: {
      name,
      message,
      project: project || null,
    },
  };
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const feedbacks = await prisma.feedback.findMany({
        where: { status: "APPROVED" },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          message: true,
          project: true,
          createdAt: true,
        },
      });

      return sendJson(res, 200, { feedbacks });
    } catch (error) {
      console.error("GET /api/feedbacks failed:", error);
      return sendJson(res, 500, { error: "Nao foi possivel carregar feedbacks." });
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
          status: true,
          createdAt: true,
        },
      });

      return sendJson(res, 201, {
        message: "Feedback enviado para aprovacao.",
        feedback: created,
      });
    } catch (error) {
      console.error("POST /api/feedbacks failed:", error);
      return sendJson(res, 500, { error: "Nao foi possivel enviar feedback." });
    }
  }

  res.setHeader("Allow", "GET, POST");
  return sendJson(res, 405, { error: "Metodo nao permitido." });
}
