import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

async function main() {
  const result = await pipeshub.semanticSearch.search({
    query: "quarterly revenue",
    limit: 10,
  });

  console.log(result.searchResponse);
}

main().catch(console.error);
