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

// Org admins only: lists every member's active tokens.
async function main() {
  const session = await login();

  const result = await session.personalAccessTokens.adminListPersonalAccessTokens({
    page: 1,
    limit: 20,
  });

  console.log(`${result.pagination.total} active tokens`);

  for (const token of result.data) {
    console.log(`${token.id}  ${token.name}  owner ${token.ownerEmail ?? token.userId}`);
  }
}

main().catch(console.error);
