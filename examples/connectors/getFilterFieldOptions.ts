// List the values you can pick for one filter (e.g. channels, projects).
// Needs PIPESHUB_CONNECTOR_ID, PIPESHUB_FILTER_KEY.
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

const connectorId = process.env["PIPESHUB_CONNECTOR_ID"] ?? "";
const filterKey = process.env["PIPESHUB_FILTER_KEY"] ?? "";

async function main() {
  const result = await pipeshub.connectorFilters.getFilterFieldOptions({
    connectorId,
    filterKey,
    limit: 20,
  });

  console.log(result);
}

main().catch(console.error);
