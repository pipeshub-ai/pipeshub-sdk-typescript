# Agent conversation examples

Scripts demonstrating agent chat over Server-Sent Events (SSE), conversation management, archives, message feedback, and regeneration.

See [`../README.md`](../README.md) for setup and environment configuration.

## Environment

From the `examples/` directory, copy `.env.template` to `.env` and fill in values before running (see [`../README.md`](../README.md#setup)).

Variables used by these examples:

| Variable | Required | Used for |
| --- | --- | --- |
| `PIPESHUB_TEST_USER_EMAIL` | yes | Authentication |
| `PIPESHUB_TEST_USER_PASSWORD` | yes | Authentication |
| `PIPESHUB_BASE_URL` | no | API host (default `http://localhost:3000`) |
| `PIPESHUB_AGENT_KEY` | no | Target agent for conversation calls |
| `CONNECTOR_ID` | no | Default retrieval filter (`apps`) in streaming examples |
| `PIPESHUB_AGENT_MODEL_KEY` | no | Only if calling `createAgentWithWebSearch()` in helpers |

If your password contains special characters (`#`, `$`, spaces), wrap it in double quotes in `.env`:

```dotenv
PIPESHUB_TEST_USER_PASSWORD="your#password"
```

## Shared helpers

[`helpers.ts`](helpers.ts) provides reusable utilities:

| Function | Purpose |
| --- | --- |
| `agentKey()` | Resolves agent key from env or default |
| `connectorId()` | Resolves `CONNECTOR_ID` from env or default |
| `defaultFilters()` | Builds default `Filters` for streaming (`apps`) |
| `firstLlmModelKey()` | Resolves `PIPESHUB_AGENT_MODEL_KEY` or picks an available LLM |
| `decodeComplete()` | Parses the stream `complete` event payload |
| `streamCreate()` | Starts a new conversation and streams the first bot reply |
| `streamAddMessage()` | Appends a user message and streams the bot reply |
| `streamRegenerate()` | Regenerates a `bot_response` message via SSE |
| `updateTitle()` | Updates conversation title |
| `printConversation()` | Fetches and prints a conversation by ID |
| `formatActivity()` | Formats conversation activity timestamps for display |
| `archiveConversation()` / `deleteConversation()` | Archive or delete a conversation |
| `listArchived()` | Paginated list of archived conversations |
| `createAgentWithWebSearch()` | Creates an example web-search-enabled agent |

### `botResponseMessageId`

`streamCreate()` returns `[conversationId, title, answer, botResponseMessageId]`. The fourth value is the `_id` of the latest `bot_response` message in the stream `complete` payload. Pass it to API methods that expect `messageId` (feedback, regeneration). It is a message document ID, not an agent ID.

## Scripts

| npm command | Source file | SDK operations demonstrated |
| --- | --- | --- |
| `npm run agent:login` | [`../client.ts`](../client.ts) | `initAuth`, `authenticate` |
| `npm run agent:stream-and-message` | `create-conversation-stream-and-add-message.ts` | `streamAgentConversation`, `streamAgentConversationMessage` |
| `npm run agent:get-by-id` | `get-conversation-by-id.ts` | `getAgentConversationById` |
| `npm run agent:get-all` | `get-all-conversations.ts` | `listAgentConversations` (owned + shared) |
| `npm run agent:update-title` | `update-conversation-title.ts` | `updateAgentConversationTitle` |
| `npm run agent:archive-unarchive` | `archive-unarchive.ts` | `archiveAgentConversation`, `unarchiveAgentConversation` |
| `npm run agent:list-archived` | `list-all-archived-conversations.ts` | create, archive, `listAgentConversationArchives`, delete |
| `npm run agent:list-archives-grouped` | `list-archives-grouped.ts` | `listAgentArchivedConversationsGrouped` |
| `npm run agent:feedback` | `add-message-feedback.ts` | `updateAgentConversationMessageFeedback` |
| `npm run agent:regenerate` | `regenerate-message-stream.ts` | `regenerateAgentConversationMessage` |

## Run examples

From the `examples/` directory (requires `.env` in that directory):

```bash
npm run agent:login                  # verify auth — expect "login ok"
npm run agent:stream-and-message
npm run agent:get-by-id
npm run agent:get-all
npm run agent:update-title
npm run agent:archive-unarchive
npm run agent:list-archived
npm run agent:list-archives-grouped
npm run agent:feedback
npm run agent:regenerate
```

Scripts are defined in [`../package.json`](../package.json). Each loads `.env` from the current directory; you do not pass a path on the command line.

## Notes

- Streaming examples print bot output live. Some scripts pass `printBot: false` to reduce console noise.
- Scripts that archive or delete conversations create their own test data. `list-all-archived-conversations.ts` cleans up conversations it creates.
- Feedback and regeneration require a `bot_response` message ID. Examples obtain this from `streamCreate()` rather than hard-coding IDs.
