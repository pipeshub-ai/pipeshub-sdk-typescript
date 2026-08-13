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

  // Returns an array — empty if the id no longer exists, rather than a 404.
  const [persisted] = await pipeshub.semanticSearch.getSearchById({
    searchId: search.searchId,
  });

  console.log(persisted);
}

main().catch(console.error);
