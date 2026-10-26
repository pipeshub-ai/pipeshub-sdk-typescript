/**
 * PipesHub retrieval as a Vercel AI SDK tool.
 *
 * ```ts
 * import { generateText, stepCountIs } from "ai";
 * import { Pipeshub } from "@pipeshub-ai/sdk";
 * import { pipeshubRetrieveTool } from "@pipeshub-ai/sdk/integrations/ai-sdk";
 *
 * const pipeshub = new Pipeshub({ serverURL: ".../api/v1", security: { bearerAuth: token } });
 * const { text } = await generateText({
 *   model,
 *   tools: { searchCompanyKnowledge: pipeshubRetrieveTool(pipeshub) },
 *   stopWhen: stepCountIs(3),
 *   prompt: "How do we roll back a canary deploy?",
 * });
 * ```
 *
 * The tool is a plain `{ description, inputSchema, execute }` object, so this
 * module does not import `ai` and the SDK gains no dependency on it.
 */

import * as z from "zod/v4";
import { Pipeshub } from "../sdk/sdk.js";
import type { Filters, RetrieveResponse } from "../models/index.js";

export type PipesHubRetrieveToolOptions = {
  /** Most chunks per call, best first (1-50). Default 8. */
  limit?: number;
  /** Narrow every call to these sources. */
  filters?: Filters;
  /** Most chunks from any one record. */
  maxChunksPerRecord?: number;
  /** Also search the org model's rewrites of the query. Default false. */
  rewriteQuery?: boolean;
  /** What the model is told the tool does. */
  description?: string;
};

const DEFAULT_DESCRIPTION =
  "Search the company's documents, messages and tickets in PipesHub. Returns "
  + "passages the user is allowed to see, each with a citation url. Cite the url "
  + "of every passage an answer relies on.";

const inputSchema = z.object({
  query: z.string().min(1).describe(
    "What to find, in the words a matching document would use.",
  ),
});

export function pipeshubRetrieveTool(
  client: Pipeshub,
  options: PipesHubRetrieveToolOptions = {},
): {
  description: string;
  inputSchema: typeof inputSchema;
  execute: (input: z.infer<typeof inputSchema>) => Promise<RetrieveResponse>;
} {
  const { description = DEFAULT_DESCRIPTION, ...request } = options;
  return {
    description,
    inputSchema,
    execute: ({ query }) => client.semanticSearch.retrieve({ query, ...request }),
  };
}
