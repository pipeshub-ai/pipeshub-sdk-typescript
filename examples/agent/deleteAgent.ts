import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

async function main() {
  const created = await pipeshub.agents.createAgent({
    name: "Delete Demo Agent",
    description: "Demo agent created by the deleteAgent example.",
    models: [{
      modelKey: process.env["PIPESHUB_MODEL_KEY"] ?? "",
      modelName: process.env["PIPESHUB_MODEL_NAME"] ?? "",
      provider: process.env["PIPESHUB_MODEL_PROVIDER"] ?? "",
      isReasoning: true,
    }],
  });

  const deleted = await pipeshub.agents.deleteAgent({ agentKey: created.agent.key });

  console.log(deleted);
}

main().catch(console.error);
