import "dotenv/config";
import { Pipeshub } from "@pipeshub-ai/sdk";

const serverURL = `${process.env["PIPESHUB_BASE_URL"]}/api/v1`;

const pipeshub = new Pipeshub({ serverURL });

// Personal access token routes only accept an interactive user session; PATs
// and OAuth tokens are rejected. So sign in with email and password first.
async function login(): Promise<Pipeshub> {
  const init = await pipeshub.userAccount.initAuth({
    email: process.env["PIPESHUB_TEST_USER_EMAIL"] ?? "",
  });
  const sessionToken = init.headers["x-session-token"]?.[0];
  if (!sessionToken) throw new Error("initAuth returned no x-session-token header");

  const auth = await pipeshub.userAccount.authenticate({
    xSessionToken: sessionToken,
    body: {
      method: "password",
      credentials: { password: process.env["PIPESHUB_TEST_USER_PASSWORD"] ?? "" },
    },
  });
  if (!("accessToken" in auth)) throw new Error("this account needs another sign-in step");

  return new Pipeshub({ serverURL, security: { bearerAuth: auth.accessToken } });
}

async function main() {
  const session = await login();

  const { token } = await session.personalAccessTokens.createPersonalAccessToken({
    name: "SDK example token",
    scopes: ["kb:read", "semantic:read"],
    expiryDays: 30, // 30, 90, 365 or "never"
  });

  // token.accessToken is the secret. It's returned only once, so store it now.
  console.log(`id: ${token.id}`);
  console.log(`scopes: ${token.scopes.join(", ")}`);
  console.log(`expires: ${token.expiresAt.toISOString()}`);

  await session.personalAccessTokens.revokePersonalAccessToken({ tokenId: token.id });
}

main().catch(console.error);
