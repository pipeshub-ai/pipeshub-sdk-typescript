/**
   * Create a new knowledge base
   *   npm run start:create
   *   npx ts-node create-knowledge-base/index.ts
   */
import { Pipeshub } from "@pipeshub-ai/sdk";

async function main(): Promise<void> {
  // create the sdk client
  const pipeshub = new Pipeshub({
    security: { bearerAuth: process.env.PIPESHUB_BEARER_AUTH },
    serverURL: process.env.PIPESHUB_SERVER_URL,
  });

  // create a kb
  const response = await pipeshub.knowledgeBases.createKnowledgeBase({
    kbName: "Sample KB - TypeScript Demo",
  });

  logger.json("Created knowledge base", response);
  logger.info("Created knowledge base id:", response.id);
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});