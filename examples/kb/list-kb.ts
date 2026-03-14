/**
   * List knowledge bases for the authenticated user
   *   npm run start:list
   *   npx ts-node list-knowledge-bases/index.ts
   */

import { Pipeshub } from "@pipeshub-ai/sdk";

async function main(): Promise<void> {
  // create the sdk client
  const pipeshub = new Pipeshub({
    security: { bearerAuth: process.env.PIPESHUB_BEARER_AUTH },
    serverURL: process.env.PIPESHUB_SERVER_URL,
  });

  // list knowledge bases
  const response = await pipeshub.knowledgeBases.listKnowledgeBases({
    permissions: "OWNER,ORGANIZER,WRITER",
    limit: 10,
    sortBy: "createdAtTimestamp",
  });
  logger.json("Knowledge bases", response);
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});