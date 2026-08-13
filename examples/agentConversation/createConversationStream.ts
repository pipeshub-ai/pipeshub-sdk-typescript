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

    switch (event.event) {
      case "TEXT_MESSAGE_CONTENT":
        process.stdout.write(data.delta ?? "");
        break;
      case "CUSTOM":
        if (data.name === "conversation_created") {
          conversationId = data.value.conversationId;
        }
        break;
      case "RUN_ERROR":
        throw new Error(data.message);
    }
  }

  console.log(`\nconversation id: ${conversationId}`);
}

main().catch(console.error);
