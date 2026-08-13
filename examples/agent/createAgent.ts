import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

async function main() {
  const { knowledgeBases } = await pipeshub.knowledgeBase.listKnowledgeBases({ limit: 1 });
  const kb = knowledgeBases[0];

  const created = await pipeshub.agents.createAgent({
    name: "CRUD Demo Agent",
    description: "Demo agent created by the createAgent example.",
    systemPrompt: "You are a helpful assistant.",
    models: [{
      modelKey: process.env["PIPESHUB_MODEL_KEY"] ?? "",
      modelName: process.env["PIPESHUB_MODEL_NAME"] ?? "",
      provider: process.env["PIPESHUB_MODEL_PROVIDER"] ?? "",
      isReasoning: true,
    }],
    knowledge: kb?.connectorId ? [{ connectorId: kb.connectorId }] : undefined,
    webSearch: { provider: "duckduckgo" },
  });

  console.log(`agent key: ${created.agent.key}`);
}

main().catch(console.error);
