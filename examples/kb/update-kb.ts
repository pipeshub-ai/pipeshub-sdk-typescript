/**
   * Update a knowledge base (e.g. display name)
   *   npm run start:update
   *   npx ts-node update-knowledge-base/index.ts
   */
import { Pipeshub } from "@pipeshub-ai/sdk";

async function main(): Promise<void> {
  // create the sdk client
  const pipeshub = new Pipeshub({
    security: { bearerAuth: process.env.PIPESHUB_BEARER_AUTH },
    serverURL: process.env.PIPESHUB_SERVER_URL,
  });

  // create a kb so we have an id to update (demo only)
  const createResponse = await pipeshub.knowledgeBases.createKnowledgeBase({
    kbName: "Sample KB - TypeScript Demo",
  });
  logger.json("Created knowledge base", createResponse);

  // update knowledge base
  const kbId = createResponse.id;
  await pipeshub.knowledgeBases.updateKnowledgeBase({
    kbId,
    body: { kbName: "Updated - TypeScript Demo" },
  });

  // get updated kb
  const response = await pipeshub.knowledgeBases.getKnowledgeBase({ kbId });
  logger.json("Knowledge base after update", response);
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});
