/* eslint-env node */
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;
const nodeEnv = globalThis?.process?.env?.NODE_ENV ?? "production";

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: nodeEnv === "development" ? ["error", "warn"] : ["error"],
  });

if (nodeEnv !== "production") {
  globalForPrisma.prisma = prisma;
}
