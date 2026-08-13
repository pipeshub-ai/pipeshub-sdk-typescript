import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

async function main() {
  const result = await pipeshub.knowledgeBase.listKnowledgeBases({
    limit: 10,
    sortBy: "updatedAtTimestamp",
    sortOrder: "desc",
  });

  for (const kb of result.knowledgeBases) {
    console.log(`${kb.id}  ${kb.name}`);
  }
}

main().catch(console.error);
