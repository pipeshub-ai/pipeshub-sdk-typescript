// Save an OAuth app (client id and secret) for a connector type.
// Needs PIPESHUB_CONNECTOR_TYPE.
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

const connectorType = process.env["PIPESHUB_CONNECTOR_TYPE"] ?? "";

async function main() {
  const result = await pipeshub.oAuthConfiguration.createOAuthConfig({
    connectorType,
    body: {
      oauthInstanceName: "qs-oauth-app",
      config: { clientId: "your-client-id", clientSecret: "your-client-secret" },
    },
  });

  console.log(result);
}

main().catch(console.error);
