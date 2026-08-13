import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

async function main() {
  const result = await pipeshub.agents.getAgent({
    agentKey: process.env["AGENT_KEY"] ?? "",
  });

  console.log(result.agent);
}

main().catch(console.error);
