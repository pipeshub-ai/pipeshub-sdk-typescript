// List the IP addresses PipesHub connects from, for your allowlist.
// No IDs needed.
import "dotenv/config";
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  // A personal access token: admin operations must act as a user, not a service account.
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

async function main() {
  const result = await pipeshub.connectorRegistry.getConnectorEgressIps();

  console.log(result);
}

main().catch(console.error);
