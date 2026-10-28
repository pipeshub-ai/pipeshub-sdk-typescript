// Delete a saved OAuth app config.
// Needs PIPESHUB_CONNECTOR_TYPE, PIPESHUB_OAUTH_CONFIG_ID.
import "dotenv/config";
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  // A personal access token: admin operations must act as a user, not a service account.
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

const connectorType = process.env["PIPESHUB_CONNECTOR_TYPE"] ?? "";
const configId = process.env["PIPESHUB_OAUTH_CONFIG_ID"] ?? "";

async function main() {
  const result = await pipeshub.oAuthConfiguration.deleteOAuthConfig({ connectorType, configId });

  console.log(result);
}

main().catch(console.error);
