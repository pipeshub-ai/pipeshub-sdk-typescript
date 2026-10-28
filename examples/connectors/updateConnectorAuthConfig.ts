// Update only the auth part of a connector config (here: its OAuth app). Turn the sync off first.
// Needs PIPESHUB_CONNECTOR_ID, PIPESHUB_OAUTH_CONFIG_ID.
import "dotenv/config";
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  // A personal access token: admin operations must act as a user, not a service account.
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

const connectorId = process.env["PIPESHUB_CONNECTOR_ID"] ?? "";
const configId = process.env["PIPESHUB_OAUTH_CONFIG_ID"] ?? "";

async function main() {
  const result = await pipeshub.connectorConfiguration.updateConnectorAuthConfig({
    connectorId,
    body: { auth: { oauthConfigId: configId } },
  });

  console.log(result);
}

main().catch(console.error);
