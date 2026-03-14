/**
   * Get child nodes of a knowledge base in the hub
   *   npm run start:child-nodes
   *   npx ts-node get-hub-child-nodes/index.ts
   */
import { Pipeshub } from "@pipeshub-ai/sdk";

async function main(): Promise<void> {
  // create the sdk client
  const pipeshub = new Pipeshub({
    security: { bearerAuth: process.env.PIPESHUB_BEARER_AUTH },
    serverURL: process.env.PIPESHUB_SERVER_URL,
  });

  // create a kb so we have a parent id (demo only)
  const createResponse = await pipeshub.knowledgeBases.createKnowledgeBase({
    kbName: "Sample KB - TypeScript Demo",
  });
  logger.json("Created knowledge base", createResponse);

  // get child nodes of this kb in the hub
  const kbId = createResponse.id;
  const response = await pipeshub.knowledgeBases.getKnowledgeHubChildNodes({
    parentType: "kb",
    parentId: kbId,
  });
  logger.json("Child nodes", response);
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});