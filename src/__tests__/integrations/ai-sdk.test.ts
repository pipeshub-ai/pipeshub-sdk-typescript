import { generateText, stepCountIs } from "ai";
import { MockLanguageModelV3 } from "ai/test";
import { expect, test } from "vitest";
import { HTTPClient } from "../../lib/http.js";
import { Pipeshub } from "../../sdk/sdk.js";
import { pipeshubRetrieveTool } from "../../integrations/ai-sdk.js";

const RESPONSE = {
  requestId: "req-1",
  incomplete: false,
  chunks: [{
    id: "v1:4",
    text: "Roll back the canary by setting its weight to 0.",
    score: 0.83,
    record: { recordId: "r1", name: "Deploy runbook", connector: "CONFLUENCE" },
    citation: { url: "https://wiki.example.com/runbook#:~:text=Roll%20back", blockIndex: 4 },
  }],
};

function client(sent: Array<{ url: string; auth: string | null; body: unknown }>): Pipeshub {
  const httpClient = new HTTPClient({
    fetcher: async (input, init) => {
      const request = input instanceof Request ? input : new Request(input, init);
      sent.push({ url: request.url, auth: request.headers.get("authorization"), body: await request.json() });
      return new Response(JSON.stringify(RESPONSE), { headers: { "content-type": "application/json" } });
    },
  });
  return new Pipeshub({ serverURL: "https://pipeshub.test/api/v1", security: { bearerAuth: "tok" }, httpClient });
}

test("execute posts the query with the tool's options and returns the chunks", async () => {
  const sent: Array<{ url: string; auth: string | null; body: unknown }> = [];
  const tool = pipeshubRetrieveTool(client(sent), { limit: 5, filters: { apps: ["a1"] } });

  const result = await tool.execute({ query: "canary rollback" });

  expect(result.chunks[0]?.citation.url).toBe("https://wiki.example.com/runbook#:~:text=Roll%20back");
  expect(sent).toEqual([{
    url: "https://pipeshub.test/api/v1/retrieve",
    auth: "Bearer tok",
    body: { query: "canary rollback", limit: 5, filters: { apps: ["a1"] }, rewriteQuery: false },
  }]);
});

test("the AI SDK calls it as a tool and hands the chunks back to the model", async () => {
  const sent: Array<{ url: string; auth: string | null; body: unknown }> = [];
  let step = 0;
  const model = new MockLanguageModelV3({
    doGenerate: async () => {
      step += 1;
      const usage = {
        inputTokens: { total: 1, noCache: 1, cacheRead: undefined, cacheWrite: undefined },
        outputTokens: { total: 1, text: 1, reasoning: undefined },
      };
      return step === 1
        ? {
          content: [{ type: "tool-call", toolCallId: "c1", toolName: "search", input: JSON.stringify({ query: "canary" }) }],
          finishReason: { unified: "tool-calls", raw: undefined },
          usage,
          warnings: [],
        }
        : {
          content: [{ type: "text", text: "Set the weight to 0." }],
          finishReason: { unified: "stop", raw: undefined },
          usage,
          warnings: [],
        };
    },
  });

  const { text, steps } = await generateText({
    model,
    tools: { search: pipeshubRetrieveTool(client(sent)) },
    stopWhen: stepCountIs(2),
    prompt: "How do we roll back a canary?",
  });

  expect(text).toBe("Set the weight to 0.");
  expect(sent[0]?.body).toEqual({ query: "canary", limit: 8, rewriteQuery: false });
  const output = steps[0]?.toolResults[0]?.output as { chunks: Array<{ id: string }> };
  expect(output.chunks.map((c) => c.id)).toEqual(["v1:4"]);
});
