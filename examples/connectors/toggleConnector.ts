// Turn the sync of a connector on or off (it flips the current state).
// Needs PIPESHUB_CONNECTOR_ID.
import "dotenv/config";
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  // A personal access token: admin operations must act as a user, not a service account.
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

const connectorId = process.env["PIPESHUB_CONNECTOR_ID"] ?? "";

async function main() {
  const result = await pipeshub.connectorControl.toggleConnector({
    connectorId,
    body: { type: "sync" },
  });

  console.log(result);
}

main().catch(console.error);
