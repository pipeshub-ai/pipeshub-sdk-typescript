/**
   * Delete a knowledge base
   *   npm run start:delete
   *   npx ts-node delete-knowledge-base/index.ts
   */
import { Pipeshub } from "@pipeshub-ai/sdk";

async function main(): Promise<void> {
  // create the sdk client
  const pipeshub = new Pipeshub({
    security: { process.env.PIPESHUB_BEARER_AUTH },
    serverURL: process.env.PIPESHUB_SERVER_URL,
  });

  // create a kb
  
  const createResponse = await pipeshub.knowledgeBases.createKnowledgeBase({
    kbName: "Sample KB - TypeScript Demo",
  });
  

  // delete kb
  const kbId = createResponse.id;
  await pipeshub.knowledgeBases.deleteKnowledgeBase({ kbId });
  logger.info("Knowledge base deleted successfully.", { kbId });
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});