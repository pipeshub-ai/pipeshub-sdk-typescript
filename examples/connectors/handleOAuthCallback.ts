// Finish the OAuth flow with the code and state the provider redirected back with.
// Needs PIPESHUB_OAUTH_CODE, PIPESHUB_OAUTH_STATE.
import "dotenv/config";
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  // A personal access token: admin operations must act as a user, not a service account.
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

const code = process.env["PIPESHUB_OAUTH_CODE"] ?? "";
const state = process.env["PIPESHUB_OAUTH_STATE"] ?? "";

async function main() {
  const result = await pipeshub.connectorOAuth.handleOAuthCallback({ code, state });

  console.log(result);
}

main().catch(console.error);
