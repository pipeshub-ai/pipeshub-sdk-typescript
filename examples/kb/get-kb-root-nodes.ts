/**
   * Get knowledge hub root nodes
   *   npm run start:root-nodes
   *   npx ts-node get-hub-root-nodes/index.ts
   */

  
import { Pipeshub } from "@pipeshub-ai/sdk";
 
async function main(): Promise<void> {
  // create the sdk client
  const pipeshub = new Pipeshub({
    security: { bearerAuth: process.env.PIPESHUB_BEARER_AUTH },
    serverURL: process.env.PIPESHUB_SERVER_URL,
  });

  // get hub root nodes (kbs, connectors, apps)
  const response = await pipeshub.knowledgeBases.getKnowledgeHubRootNodes({});
  logger.json("Root nodes", response);
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});