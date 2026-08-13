import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

async function main() {
  const created = await pipeshub.agents.createAgent({
    name: "Update Demo Agent",
    description: "Demo agent created by the updateAgent example.",
    systemPrompt: "You are a helpful assistant.",
    models: [{
      modelKey: process.env["PIPESHUB_MODEL_KEY"] ?? "",
      modelName: process.env["PIPESHUB_MODEL_NAME"] ?? "",
      provider: process.env["PIPESHUB_MODEL_PROVIDER"] ?? "",
      isReasoning: true,
    }],
  });

  const agentKey = created.agent.key;

  await pipeshub.agents.updateAgent({
    agentKey,
    body: {
      name: "Update Demo Agent (updated)",
      description: "Updated by the updateAgent example.",
    },
  });

  const updated = await pipeshub.agents.getAgent({ agentKey });
  console.log(updated.agent);

  await pipeshub.agents.deleteAgent({ agentKey });
}

main().catch(console.error);
