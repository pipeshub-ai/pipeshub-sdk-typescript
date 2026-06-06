import type { Pipeshub } from "@pipeshub-ai/sdk";
import type {
  AgentConversationListItem,
  AgentCreateWebSearch,
  Filters,
} from "@pipeshub-ai/sdk/models";

export const DEFAULT_AGENT_KEY = "52b7e901-f3e9-4009-bcd7-c0274c58f296";
export function agentKey(): string {
  return process.env.PIPESHUB_AGENT_KEY ?? DEFAULT_AGENT_KEY;
}

export const DEFAULT_CONNECTOR_ID = "270d4bac-234a-4c0d-963f-84f152cd21f0";
export function connectorId(): string {
  return process.env.CONNECTOR_ID ?? DEFAULT_CONNECTOR_ID;
}

export function defaultFilters(): Filters {
  return { apps: [connectorId()] };
}

type ConversationMessage = {
  _id?: string;
  messageType?: string;
  content?: string;
};

type CompletePayload = {
  conversation?: {
    _id?: string;
    title?: string;
    messages?: ConversationMessage[];
  };
};

export function decodeComplete(
  data: string,
): [answer: string, conversationId: string, title: string, botResponseMessageId: string | null] {
  const conv = (JSON.parse(data) as CompletePayload).conversation ?? {};
  let conversationId = conv._id ?? "";
  let title = conv.title ?? "";
  let answer = "";
  let botResponseMessageId: string | null = null;

  const messages = conv.messages ?? [];
  for (let i = messages.length - 1; i >= 0; i--) {
    const msg = messages[i]!;
    if (!title && msg.messageType === "user_query") {
      title = msg.content ?? "";
    }
    if (msg.messageType === "bot_response") {
      answer = msg.content ?? "";
      botResponseMessageId = msg._id ?? null;
      break;
    }
  }

  return [answer, conversationId, title, botResponseMessageId];
}

export async function firstLlmModelKey(pipeshub: Pipeshub): Promise<string> {
  const envModelKey = process.env.PIPESHUB_AGENT_MODEL_KEY;
  if (envModelKey) {
    return envModelKey;
  }

  const response = await pipeshub.aiModelsProviders.getAvailableModelsByType({
    modelType: "llm",
  });

  const { models } = response;
  if (models.length === 0) {
    throw new Error(
      "No LLM models configured. Set PIPESHUB_AGENT_MODEL_KEY or configure an LLM provider.",
    );
  }

  const reasoningModel = models.find((model) => model.isReasoning);
  const model = reasoningModel ?? models[0];
  return model.modelKey;
}

export async function createAgentWithWebSearch(
  pipeshub: Pipeshub,
): Promise<string> {
  const webSearch: AgentCreateWebSearch = { provider: "duckduckgo" };

  const providers = await pipeshub.webSearch.getWebSearchProviders();
  for (const provider of providers.providers) {
    if (provider.provider === "duckduckgo" && provider.providerKey) {
      webSearch.providerKey = provider.providerKey;
      break;
    }
  }

  const modelKey = await firstLlmModelKey(pipeshub);
  const response = await pipeshub.agents.createAgent({
    name: `SDK example ${Math.floor(Date.now() / 1000)}`,
    models: [{ modelKey, isReasoning: true }],
    webSearch,
  });

  if (!response.agent.key) {
    throw new Error("create agent: response missing agent key");
  }

  return response.agent.key;
}

export async function streamCreate(
  pipeshub: Pipeshub,
  query: string,
  filters?: Filters,
  options?: { key?: string; printBot?: boolean },
): Promise<[conversationId: string, title: string, answer: string, botResponseMessageId: string | null]> {
  const printBot = options?.printBot ?? true;
  const stream = await pipeshub.agents.streamAgentConversation({
    agentKey: options?.key ?? agentKey(),
    body: {
      query,
      filters,
      chatMode: "auto",
    },
  });

  if (printBot) {
    process.stdout.write(`\nYou: ${query}\n\nBot: `);
  }

  for await (const ev of stream) {
    if (!ev.event || !ev.data) {
      continue;
    }
    if (ev.event === "complete") {
      const [answer, conversationId, title, botResponseMessageId] =
        decodeComplete(ev.data);
      if (printBot && answer) {
        console.log(answer);
      }
      return [conversationId, title, answer, botResponseMessageId];
    }
    if (ev.event === "error") {
      throw new Error(`stream error: ${ev.data}`);
    }
  }

  throw new Error("stream ended without complete event");
}

export async function streamAddMessage(
  pipeshub: Pipeshub,
  conversationId: string,
  query: string,
  filters?: Filters,
  options?: { key?: string; printBot?: boolean },
): Promise<string> {
  const printBot = options?.printBot ?? true;
  const stream = await pipeshub.agents.streamAgentConversationMessage({
    agentKey: options?.key ?? agentKey(),
    conversationId,
    body: {
      query,
      filters,
      chatMode: "auto",
    },
  });

  if (printBot) {
    process.stdout.write(`\nYou: ${query}\n\nBot: `);
  }

  for await (const ev of stream) {
    if (!ev.event || !ev.data) {
      continue;
    }
    if (ev.event === "complete") {
      const [answer] = decodeComplete(ev.data);
      if (printBot && answer) {
        console.log(answer);
      }
      return answer;
    }
    if (ev.event === "error") {
      throw new Error(`stream error: ${ev.data}`);
    }
  }

  throw new Error("stream ended without complete event");
}

export async function streamRegenerate(
  pipeshub: Pipeshub,
  conversationId: string,
  messageId: string,
  filters?: Filters,
  options?: { key?: string },
): Promise<string> {
  let accumulated = "";
  const stream = await pipeshub.agents.regenerateAgentConversationMessage({
    agentKey: options?.key ?? agentKey(),
    conversationId,
    messageId,
    body: { filters },
  });

  process.stdout.write(`\nRegenerating message ${messageId} ...\n\nBot: `);

  for await (const ev of stream) {
    if (!ev.event || !ev.data) {
      continue;
    }
    if (ev.event === "answer_chunk") {
      const chunk = JSON.parse(ev.data) as { accumulated?: string };
      accumulated = chunk.accumulated ?? accumulated;
    } else if (ev.event === "complete") {
      let [answer] = decodeComplete(ev.data);
      answer = answer || accumulated;
      console.log(answer);
      return answer;
    } else if (ev.event === "error") {
      throw new Error(`stream error: ${ev.data}`);
    }
  }

  throw new Error("stream ended without complete event");
}

export async function updateTitle(
  pipeshub: Pipeshub,
  conversationId: string,
  title: string,
  options?: { key?: string },
): Promise<string> {
  const res = await pipeshub.agents.updateAgentConversationTitle({
    agentKey: options?.key ?? agentKey(),
    conversationId,
    body: { title },
  });

  const updatedTitle = res.conversation.title;
  if (updatedTitle == null) {
    throw new Error("updateAgentConversationTitle returned no title");
  }

  return updatedTitle;
}

export async function printConversation(
  pipeshub: Pipeshub,
  conversationId: string,
  options?: { key?: string; verbose?: boolean },
): Promise<void> {
  const res = await pipeshub.agents.getAgentConversationById({
    agentKey: options?.key ?? agentKey(),
    conversationId,
  });

  const conv = res.conversation;
  console.log(`  id: ${conv.id}`);
  if (conv.title) {
    console.log(`  title: ${JSON.stringify(conv.title)}`);
  }

  const messages = conv.messages ?? [];
  console.log(`  messages: ${messages.length}`);

  const verbose = options?.verbose ?? false;
  messages.forEach((msg, idx) => {
    const content = msg.content ?? "";
    const msgType = msg.messageType ?? "";
    const i = idx + 1;
    if (verbose) {
      console.log(`\n--- message ${i} [${msgType}] ---\n${content}`);
    } else {
      console.log(`  - message ${i} [${msgType}]: ${content}`);
    }
  });
}

export function formatActivity(conv: AgentConversationListItem): string {
  if (conv.lastActivityAt != null) {
    return new Date(conv.lastActivityAt).toISOString();
  }
  if (conv.updatedAt != null) {
    return conv.updatedAt.toISOString();
  }
  return "-";
}

export async function archiveConversation(
  pipeshub: Pipeshub,
  conversationId: string,
  options?: { key?: string },
): Promise<void> {
  await pipeshub.agents.archiveAgentConversation({
    agentKey: options?.key ?? agentKey(),
    conversationId,
  });
}

export async function deleteConversation(
  pipeshub: Pipeshub,
  conversationId: string,
  options?: { key?: string },
): Promise<void> {
  await pipeshub.agents.deleteAgentConversationById({
    agentKey: options?.key ?? agentKey(),
    conversationId,
  });
}

export async function listArchived(
  pipeshub: Pipeshub,
  options?: { key?: string; pageLimit?: number },
): Promise<AgentConversationListItem[]> {
  const key = options?.key ?? agentKey();
  const limit = options?.pageLimit ?? 20;
  const conversations: AgentConversationListItem[] = [];
  let page = 1;

  while (true) {
    const res = await pipeshub.agents.listAgentConversationArchives({
      agentKey: key,
      page,
      limit,
    });

    conversations.push(...res.conversations);

    if (!res.pagination.hasNextPage) {
      break;
    }

    page += 1;
  }

  return conversations;
}
