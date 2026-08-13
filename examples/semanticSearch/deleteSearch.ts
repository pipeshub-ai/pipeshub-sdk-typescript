import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

async function main() {
  const search = await pipeshub.semanticSearch.search({
    query: "quarterly revenue",
    limit: 10,
  });

  const deleted = await pipeshub.semanticSearch.deleteSearchById({
    searchId: search.searchId,
  });

  console.log(deleted);
}

main().catch(console.error);
