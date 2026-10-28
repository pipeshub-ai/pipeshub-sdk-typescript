// Finish the OAuth flow with the code and state the provider redirected back with.
// Needs PIPESHUB_OAUTH_CODE, PIPESHUB_OAUTH_STATE.
import "dotenv/config";
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  // OAuth2 client credentials. The SDK fetches the access token itself.
  security: {
    oauth2: {
      clientID: process.env["PIPESHUB_CLIENT_ID"] ?? "",
      clientSecret: process.env["PIPESHUB_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["PIPESHUB_TOKEN_URL"]
        || `${process.env["PIPESHUB_BASE_URL"]}/api/v1/oauth2/token`,
    },
  },
});

const code = process.env["PIPESHUB_OAUTH_CODE"] ?? "";
const state = process.env["PIPESHUB_OAUTH_STATE"] ?? "";

async function main() {
  const result = await pipeshub.connectorOAuth.handleOAuthCallback({ code, state });

  console.log(result);
}

main().catch(console.error);
