/**
   * Get a single knowledge base by id
   *   npm run start:get
   *   npx ts-node get-knowledge-base/index.ts
   */

  
import { Pipeshub } from "@pipeshub-ai/sdk";
 

async function main(): Promise<void> {
  // create the sdk client
  const pipeshub = new Pipeshub({
    security: { bearerAuth: process.env.PIPESHUB_BEARER_AUTH },
    serverURL: process.env.PIPESHUB_SERVER_URL,
  });

  // create a kb so we have an id to fetch (demo only)
  const createResponse = await pipeshub.knowledgeBases.createKnowledgeBase({
    kbName: "Sample KB - TypeScript Demo",
  });
  logger.json("Created knowledge base", createResponse);

  // get knowledge base by id
  const kbId = createResponse.id;
  const response = await pipeshub.knowledgeBases.getKnowledgeBase({ kbId });
  logger.json("Knowledge base", response);
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});