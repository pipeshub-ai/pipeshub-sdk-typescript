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

type AgentStreamEvent = {
  event?: string;
  data?: string;
};

export async function printAgentConversationStream(
  stream: AsyncIterable<AgentStreamEvent>,
  options?: { query?: string; label?: string; silent?: boolean },
): Promise<string> {
  const silent = options?.silent ?? false;

  if (!silent) {
    if (options?.query != null) {
      process.stdout.write(`\nYou: ${options.query}\n\nBot: `);
    } else if (options?.label != null) {
      process.stdout.write(`\n${options.label}\n\nBot: `);
    }
  }

  let accumulated = "";
  for await (const ev of stream) {
    if (!ev.event || !ev.data) {
      continue;
    }
    if (ev.event === "answer_chunk") {
      const chunk = JSON.parse(ev.data) as { accumulated?: string };
      const text = chunk.accumulated ?? "";
      if (!silent) {
        const delta = text.slice(accumulated.length);
        if (delta) {
          process.stdout.write(delta);
        }
      }
      accumulated = text;
    } else if (ev.event === "complete") {
      const [answer] = decodeComplete(ev.data);
      const finalAnswer = answer || accumulated;
      if (!silent) {
        if (!accumulated && finalAnswer) {
          process.stdout.write(finalAnswer);
        }
        console.log();
      }
      return ev.data;
    } else if (ev.event === "error") {
      throw new Error(`stream error: ${ev.data}`);
    }
  }

  throw new Error("stream ended without complete event");
}
