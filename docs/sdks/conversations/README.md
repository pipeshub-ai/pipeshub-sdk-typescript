# Conversations

## Overview

### Available Operations

* [streamChat](#streamchat) - Create conversation with streaming response
* [getAllConversations](#getallconversations) - List all conversations
* [getArchivedConversations](#getarchivedconversations) - List archived conversations
* [searchArchivedConversations](#searcharchivedconversations) - Search archived conversations
* [getConversationById](#getconversationbyid) - Get conversation by ID
* [deleteConversationById](#deleteconversationbyid) - Delete conversation
* [addMessageStream](#addmessagestream) - Add message to a conversation with streaming response
* [updateConversationTitle](#updateconversationtitle) - Update conversation title
* [archiveConversation](#archiveconversation) - Archive conversation
* [unarchiveConversation](#unarchiveconversation) - Unarchive conversation
* [regenerateAnswer](#regenerateanswer) - Regenerate AI response
* [updateMessageFeedback](#updatemessagefeedback) - Submit feedback on AI response

## streamChat

Start a new conversation and stream the AI response over Server-Sent
Events (SSE). Behaves like `POST /conversations` but emits tokens,
tool activity, and status updates incrementally instead of returning
a single JSON response at the end.

**Lifecycle**

1. The server validates `query`, persists an in-progress
   conversation, then opens the SSE stream with HTTP `200`.
2. A `connected` event is emitted immediately with the new
   `conversationId` so the client can link the stream (sidebar,
   parallel tabs, deep links) without an extra request.
3. AI-backend events stream through (token chunks, tool calls,
   status, etc.).
4. On success a single `complete` event is emitted carrying the
   full persisted conversation.
5. On failure an `error` event is emitted and the conversation is
   marked FAILED before the stream closes.

**Event vocabulary**

Three events have stable, server-defined `data` shapes:

- `connected` — `{ "message": string, "conversationId": string,
  "title": string }`
- `complete` — `{ "conversation": Conversation,
  "meta": { "requestId": string, "timestamp": string,
  "duration": number } }`
- `error` — `{ "error": string, "details"?: string }`

The forwarded events are `status`, `answer_chunk`, `tool_calls`,
`restreaming`, `metadata`, and `tool_execution_complete`. Their
payloads come from the Python query service and may evolve. Note
that raw `tool_call` / `tool_success` / `tool_error` / `tool_result`
events emitted by the LLM tool runtime are rewrapped as `status` by
the upstream wrapper before they reach this route, so clients on
`/conversations/stream` never see those names directly. Clients
should ignore unknown event names rather than treating them as
errors.

**Agent mode**

When `chatMode` selects an agent mode (for example `agent:auto`),
the optional `tools` list restricts which tools the agent may
invoke for this turn. Outside agent modes the `tools` field is
ignored.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="streamChat" method="post" path="/conversations/stream" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.streamChat({
    query: "What are the key findings from our Q4 financial report?",
    recordIds: [
      "507f1f77bcf86cd799439011",
      "507f1f77bcf86cd799439012",
    ],
    modelKey: "gpt-4-turbo",
    modelName: "GPT-4 Turbo",
    modelFriendlyName: "GPT-4 Turbo",
    chatMode: "balanced",
    timezone: "America/New_York",
    currentTime: new Date("2026-04-12T16:00:00+05:30"),
    tools: [
      "jira.create_issue",
      "confluence.search_content",
    ],
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsStreamChat } from "@pipeshub-ai/sdk/funcs/conversations-stream-chat.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsStreamChat(pipeshub, {
    query: "What are the key findings from our Q4 financial report?",
    recordIds: [
      "507f1f77bcf86cd799439011",
      "507f1f77bcf86cd799439012",
    ],
    modelKey: "gpt-4-turbo",
    modelName: "GPT-4 Turbo",
    modelFriendlyName: "GPT-4 Turbo",
    chatMode: "balanced",
    timezone: "America/New_York",
    currentTime: new Date("2026-04-12T16:00:00+05:30"),
    tools: [
      "jira.create_issue",
      "confluence.search_content",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("conversationsStreamChat failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateConversationRequest](../../models/create-conversation-request.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<models.AssistantStreamSSEEvent>](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getAllConversations

Retrieve paginated conversations for the authenticated user.

**Overview:**

Use the optional `source` query parameter to choose which list to return:
`owned` — only conversations you own (`userId` matches the current user).
`shared` — conversations where you have recipient access
(`isShared` and your user appears in `sharedWith`), without the owner-only branch.
Defaults to `owned` when omitted. Each call returns one list; call twice if you need both.

**Filtering:**

- Only non-archived conversations are returned by default
- Use `/conversations/show/archives` for archived conversations

**Sorting:**

Conversations are sorted by last activity timestamp (most recent first) by default.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAllConversations" method="get" path="/conversations" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.getAllConversations({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsGetAllConversations } from "@pipeshub-ai/sdk/funcs/conversations-get-all-conversations.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsGetAllConversations(pipeshub, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsGetAllConversations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllConversationsRequest](../../models/operations/get-all-conversations-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllConversationsResponse](../../models/operations/get-all-conversations-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getArchivedConversations

Retrieve all archived conversations for the authenticated user.

**Overview:**

Archived conversations are hidden from the main list but preserved for reference.
This endpoint returns only conversations where `isArchived: true` and `archivedBy`
is set. Results include conversations the caller owns and those shared with them.

**Filtering and sorting:**

Results can be narrowed using `search`, `shared`, `startDate`, `endDate`, and
`conversationId`. Sorting is controlled by `sortBy` and `sortOrder`. Pagination
is controlled by `page` and `limit`.

**Unarchiving:**

Use `PATCH /conversations/{conversationId}/unarchive` to restore a conversation
to the active list.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getArchivedConversations" method="get" path="/conversations/show/archives" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.getArchivedConversations({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsGetArchivedConversations } from "@pipeshub-ai/sdk/funcs/conversations-get-archived-conversations.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsGetArchivedConversations(pipeshub, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsGetArchivedConversations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetArchivedConversationsRequest](../../models/operations/get-archived-conversations-request.md)                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetArchivedConversationsResponse](../../models/operations/get-archived-conversations-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## searchArchivedConversations

Search across all archived conversations (assistant and agent) for the authenticated user.

**Overview:**

Performs a case-insensitive substring match against conversation titles and message content
across both assistant (`Conversation`) and agent (`AgentConversation`) archived collections.
Results are merged server-side and sorted by `lastActivityAt` descending.

**Search parameter:**

The `search` query parameter is required, must be a non-empty string, and is capped at
1000 characters. Requests that omit it or exceed the cap return `400`.

**Pagination:**

Results are paginated using `page` and `limit`. The response includes a `pagination`
block with total counts and a `summary` block that breaks matches down by source.

**Item shape:**

Each item is a conversation list entry (no `messages` payload — that field is omitted
for performance) tagged with `source`, plus computed `isOwner`, `accessLevel`,
`archivedAt`, and `archivedBy`. `agentKey` is present only when `source` is `agent`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="searchArchivedConversations" method="get" path="/conversations/show/archives/search" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.searchArchivedConversations({
    search: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsSearchArchivedConversations } from "@pipeshub-ai/sdk/funcs/conversations-search-archived-conversations.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsSearchArchivedConversations(pipeshub, {
    search: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsSearchArchivedConversations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchArchivedConversationsRequest](../../models/operations/search-archived-conversations-request.md)                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchArchivedConversationsResponse](../../models/operations/search-archived-conversations-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getConversationById

Retrieve a specific conversation with its full message history.

**Overview:**

Returns the complete conversation including all messages, citations,
feedback, and metadata. Messages can be paginated for long conversations.

**Message Pagination:**

For conversations with many messages, use pagination parameters:

- `page`: Page number (default: 1)
- `limit`: Messages per page (default: 10)
- `sortBy`: Sort field (default: createdAt)
- `sortOrder`: 'asc' or 'desc' (default: desc)

**Access Control:**

Users can access conversations they own or that have been shared with them.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConversationById" method="get" path="/conversations/{conversationId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.getConversationById({
    conversationId: "507f1f77bcf86cd799439011",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsGetConversationById } from "@pipeshub-ai/sdk/funcs/conversations-get-conversation-by-id.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsGetConversationById(pipeshub, {
    conversationId: "507f1f77bcf86cd799439011",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsGetConversationById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConversationByIdRequest](../../models/operations/get-conversation-by-id-request.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConversationByIdResponse](../../models/operations/get-conversation-by-id-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteConversationById

Delete a conversation by its ID.

**Overview:**

Performs a soft delete by setting `isDeleted: true`. The conversation is
removed from listings but preserved in the database. All citations
referenced by messages in the conversation are also soft-deleted.

**Permissions:**

The conversation initiator can always delete. Users the conversation has
been shared with may delete it only when their `sharedWith.accessLevel`
is `write`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteConversationById" method="delete" path="/conversations/{conversationId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.deleteConversationById({
    conversationId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsDeleteConversationById } from "@pipeshub-ai/sdk/funcs/conversations-delete-conversation-by-id.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsDeleteConversationById(pipeshub, {
    conversationId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsDeleteConversationById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteConversationByIdRequest](../../models/operations/delete-conversation-by-id-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteConversationByIdResponse](../../models/operations/delete-conversation-by-id-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## addMessageStream

Add a follow-up message to an existing conversation and stream the
assistant's response over Server-Sent Events.

Functionally equivalent to `POST /conversations/{conversationId}/messages`
but the response is delivered as an SSE stream so clients can render
the answer incrementally.

The wire vocabulary is described by `AssistantMessageStreamSSEEvent`.
It is the same event set as `/conversations/stream`; only the
`connected` and `complete` payloads differ because the conversation
already exists when this route is called.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="addMessageStream" method="post" path="/conversations/{conversationId}/messages/stream" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.addMessageStream({
    conversationId: "<value>",
    body: {
      query: "Can you elaborate on the revenue trends?",
      timezone: "America/New_York",
      currentTime: new Date("2026-04-12T16:00:00+05:30"),
      tools: [
        "jira.create_issue",
        "confluence.search_content",
      ],
    },
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsAddMessageStream } from "@pipeshub-ai/sdk/funcs/conversations-add-message-stream.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsAddMessageStream(pipeshub, {
    conversationId: "<value>",
    body: {
      query: "Can you elaborate on the revenue trends?",
      timezone: "America/New_York",
      currentTime: new Date("2026-04-12T16:00:00+05:30"),
      tools: [
        "jira.create_issue",
        "confluence.search_content",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("conversationsAddMessageStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddMessageStreamRequest](../../models/operations/add-message-stream-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<models.AssistantMessageStreamSSEEvent>](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateConversationTitle

Update the title of a conversation.

**Overview:**

Conversation titles are auto-generated from the first query by default.
Use this endpoint to set a custom, more descriptive title.

**Title limits:**

- Minimum: 1 character
- Maximum: 200 characters

**Permissions:**

The conversation must exist, belong to the calling user's organization,
be owned by the caller (matched on `userId`), and not be soft-deleted.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateConversationTitle" method="patch" path="/conversations/{conversationId}/title" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.updateConversationTitle({
    conversationId: "<value>",
    body: {
      title: "Q4 Sales Analysis Discussion",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsUpdateConversationTitle } from "@pipeshub-ai/sdk/funcs/conversations-update-conversation-title.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsUpdateConversationTitle(pipeshub, {
    conversationId: "<value>",
    body: {
      title: "Q4 Sales Analysis Discussion",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsUpdateConversationTitle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateConversationTitleRequest](../../models/operations/update-conversation-title-request.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateConversationTitleResponse](../../models/operations/update-conversation-title-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## archiveConversation

Archive a conversation to hide it from the main list.

**Overview:**

Archived conversations are preserved but hidden from the default conversation list.
Use archiving to clean up your workspace without permanently deleting conversations.

**Access:**

The caller must be the conversation's initiator, or be listed in `sharedWith`
with `accessLevel: write`. Already-archived conversations return `400`.

**Retrieval:**

View archived conversations using `GET /conversations/show/archives`.
Restore one with `PATCH /conversations/{conversationId}/unarchive`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="archiveConversation" method="patch" path="/conversations/{conversationId}/archive" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.archiveConversation({
    conversationId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsArchiveConversation } from "@pipeshub-ai/sdk/funcs/conversations-archive-conversation.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsArchiveConversation(pipeshub, {
    conversationId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsArchiveConversation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ArchiveConversationRequest](../../models/operations/archive-conversation-request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ArchiveConversationResponse](../../models/operations/archive-conversation-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## unarchiveConversation

Restore an archived conversation.

- Path params: `conversationId`
- Query params: none
- Body: none


### Example Usage

<!-- UsageSnippet language="typescript" operationID="unarchiveConversation" method="patch" path="/conversations/{conversationId}/unarchive" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.unarchiveConversation({
    conversationId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsUnarchiveConversation } from "@pipeshub-ai/sdk/funcs/conversations-unarchive-conversation.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsUnarchiveConversation(pipeshub, {
    conversationId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsUnarchiveConversation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnarchiveConversationRequest](../../models/operations/unarchive-conversation-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UnarchiveConversationResponse](../../models/operations/unarchive-conversation-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## regenerateAnswer

Regenerate the AI response for a specific message and stream the new
answer over Server-Sent Events.

**Overview:**

If you're not satisfied with an AI response, use this endpoint to generate
a new answer. The original user query is re-processed and a new bot
response replaces the previous one in place.

**Constraints:**

- Only the *last* message of the conversation can be regenerated.
- The target message must be of type `bot_response`.

**Use Cases:**

- Response was incomplete or unclear
- Want to try a different AI model
- New documents have been indexed since original response

**Model Override:**

Specify `modelKey` to use a different model for regeneration.

**Streaming:**

The response is delivered as an SSE (`text/event-stream`) stream. The
exact event vocabulary depends on `chatMode`:

- For non-agent modes (e.g. `internal_search`, `web_search`) the
  request is dispatched to the assistant chat backend.
- For agent modes (e.g. `agent:auto`) the request is dispatched to
  the agent backend with a placeholder agent built from the caller's
  workspace, which can additionally emit `tool_result` and
  `tool_execution_complete` events.

See `SSEEvent` for the full union of event names this endpoint can
emit across both backends.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="regenerateAnswer" method="post" path="/conversations/{conversationId}/message/{messageId}/regenerate" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.regenerateAnswer({
    conversationId: "<value>",
    messageId: "<value>",
    body: {
      modelKey: "05438a37-68f2-4641-a8dc-6c47e63278ca",
      modelName: "gpt-5.4-mini",
      modelFriendlyName: "mini",
      chatMode: "internal_search",
      timezone: "Asia/Calcutta",
      currentTime: new Date("2026-05-11T15:43:21+05:30"),
      tools: [
        "jira.create_issue",
        "confluence.search_content",
      ],
    },
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsRegenerateAnswer } from "@pipeshub-ai/sdk/funcs/conversations-regenerate-answer.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsRegenerateAnswer(pipeshub, {
    conversationId: "<value>",
    messageId: "<value>",
    body: {
      modelKey: "05438a37-68f2-4641-a8dc-6c47e63278ca",
      modelName: "gpt-5.4-mini",
      modelFriendlyName: "mini",
      chatMode: "internal_search",
      timezone: "Asia/Calcutta",
      currentTime: new Date("2026-05-11T15:43:21+05:30"),
      tools: [
        "jira.create_issue",
        "confluence.search_content",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("conversationsRegenerateAnswer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RegenerateAnswerRequest](../../models/operations/regenerate-answer-request.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<models.SSEEvent>](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateMessageFeedback

Append a feedback entry to a bot-response message.

**Overview**

Feedback helps improve AI response quality over time. You can record an
overall helpfulness signal, per-aspect ratings, issue categories, and
free-text comments. Each call appends a new entry to the message;
previous entries are preserved.

**Feedback options**

- `isHelpful` — overall thumbs up/down.
- `ratings` — 1–5 scores keyed by an aspect name you choose
  (e.g. `accuracy`, `relevance`, `completeness`, `clarity`).
- `categories` — issue or positive categories from a fixed list.
- `comments` — free-text `positive`, `negative`, and `suggestions`.
- `metrics` — optional client-side telemetry
  (`userInteractionTime`, `feedbackSessionId`).

**Restrictions**

Feedback can only be submitted on `bot_response` messages — user
queries and system messages are rejected with `400`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateMessageFeedback" method="post" path="/conversations/{conversationId}/message/{messageId}/feedback" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.updateMessageFeedback({
    conversationId: "<value>",
    messageId: "<value>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsUpdateMessageFeedback } from "@pipeshub-ai/sdk/funcs/conversations-update-message-feedback.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsUpdateMessageFeedback(pipeshub, {
    conversationId: "<value>",
    messageId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsUpdateMessageFeedback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateMessageFeedbackRequest](../../models/operations/update-message-feedback-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateMessageFeedbackResponse](../../models/operations/update-message-feedback-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |