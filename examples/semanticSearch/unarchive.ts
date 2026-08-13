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

  await pipeshub.semanticSearch.archiveSearch({ searchId: search.searchId });

  const unarchived = await pipeshub.semanticSearch.unarchiveSearch({
    searchId: search.searchId,
  });

  console.log(unarchived);
}

main().catch(console.error);
