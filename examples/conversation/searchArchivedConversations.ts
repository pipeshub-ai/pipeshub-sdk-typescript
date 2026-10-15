import "dotenv/config";
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  // OAuth2 client credentials. The SDK fetches the access token itself.
  security: {
    oauth2: {
      clientID: process.env["PIPESHUB_CLIENT_ID"] ?? "",
      clientSecret: process.env["PIPESHUB_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["PIPESHUB_TOKEN_URL"]
        || `${process.env["PIPESHUB_BASE_URL"]}/api/v1/oauth2/token`,
    },
  },
});

async function main() {
  const created = await pipeshub.conversations.createConversation({
    query: "Who moved the cheese?",
    chatMode: "internal_search",
  }, { timeoutMs: 300_000 });

  const conversationId = created.result.conversation.id;
  if (!conversationId) throw new Error("createConversation returned no conversation id");

  // Give it a known title so the search below has something to match.
  await pipeshub.conversations.updateConversationTitle({
    conversationId,
    body: { title: "Cheese logistics review" },
  });
  await pipeshub.conversations.archiveConversation({ conversationId });

  const result = await pipeshub.conversations.searchArchivedConversations({
    search: "cheese logistics",
    limit: 20,
  });

  for (const conversation of result.conversations ?? []) {
    console.log(`${conversation.id}  ${conversation.source}  ${conversation.title}`);
  }

  await pipeshub.conversations.deleteConversationById({ conversationId });
}

main().catch(console.error);
