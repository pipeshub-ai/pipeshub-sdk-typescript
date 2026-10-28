// Test credentials for a connector type before saving them. RSS has no connection check (400).
// Needs PIPESHUB_CONNECTOR_TYPE.
import "dotenv/config";
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  // A personal access token: admin operations must act as a user, not a service account.
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

const connectorType = process.env["PIPESHUB_CONNECTOR_TYPE"] ?? "";

async function main() {
  const result = await pipeshub.connectorRegistry.testConnectorConnection({
    connectorType,
    body: { auth: {} },
  });

  console.log(result);
}

main().catch(console.error);
