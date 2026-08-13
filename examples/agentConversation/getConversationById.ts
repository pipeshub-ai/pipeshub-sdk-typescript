import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

const agentKey = process.env["AGENT_KEY"] ?? "";

async function main() {
  const stream = await pipeshub.agents.streamAgentConversation({
    agentKey,
    body: { query: "Who moved the cheese?", chatMode: "quick" },
  });

  let conversationId: string | undefined;

  for await (const event of stream) {
    const data = event.data ? JSON.parse(event.data) : undefined;
    if (event.event === "RUN_ERROR") throw new Error(data.message);
    if (event.event === "CUSTOM" && data.name === "conversation_created") {
      conversationId = data.value.conversationId;
    }
  }

  if (!conversationId) throw new Error("stream ended without a conversation id");

  const result = await pipeshub.agents.getAgentConversationById({ agentKey, conversationId });

  console.log(result.conversation);
}

main().catch(console.error);
