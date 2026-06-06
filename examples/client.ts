/**
 * Shared auth helper for PipesHub SDK examples.
 *
 * Usage:
 *   npx tsx client.ts .env
 */
import dotenv from "dotenv";

import { Pipeshub } from "@pipeshub-ai/sdk";

export function loadEnv(path: string): void {
  const result = dotenv.config({ path });
  if (result.error) throw result.error;
}

export async function createClient(options?: {
  email?: string;
  password?: string;
  baseUrl?: string;
}): Promise<Pipeshub> {
  const email = options?.email ?? process.env.PIPESHUB_TEST_USER_EMAIL;
  const password = options?.password ?? process.env.PIPESHUB_TEST_USER_PASSWORD;

  if (!email) {
    throw new Error(
      "PIPESHUB_TEST_USER_EMAIL is required (set in env or pass email option)",
    );
  }
  if (!password) {
    throw new Error(
      "PIPESHUB_TEST_USER_PASSWORD is required (set in env or pass password option)",
    );
  }

  const baseUrl = (
    options?.baseUrl ??
    process.env.PIPESHUB_BASE_URL ??
    "http://localhost:3000"
  ).replace(/\/$/, "");
  const serverURL = `${baseUrl}/api/v1`;

  const pipeshub = new Pipeshub({ serverURL });
  const init = await pipeshub.userAccount.initAuth({ email });
  const token = init.headers["x-session-token"]?.[0];
  if (!token) {
    throw new Error("missing x-session-token from initAuth response");
  }

  const auth = await pipeshub.userAccount.authenticate({
    xSessionToken: token,
    body: {
      method: "password",
      credentials: { password },
    },
  });

  if (!("accessToken" in auth)) {
    throw new Error("multi-step auth not supported in this example");
  }

  return new Pipeshub({
    serverURL,
    security: { bearerAuth: auth.accessToken },
  });
}

if (process.argv[1]?.endsWith("client.ts")) {
  const envPath = process.argv[2];
  if (!envPath) {
    console.error("usage: npx tsx client.ts .env");
    process.exit(1);
  }

  loadEnv(envPath);
  createClient()
    .then(() => console.log("login ok"))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
