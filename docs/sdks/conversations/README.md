# Conversations

## Overview

AI-powered conversational chat management with citations and follow-up questions

### Available Operations

* [createConversation](#createconversation) - Create conversation (non-streaming)
* [streamChat](#streamchat) - Create conversation with streaming response
* [getAllConversations](#getallconversations) - List all conversations
* [getArchivedConversations](#getarchivedconversations) - List archived conversations
* [searchArchivedConversations](#searcharchivedconversations) - Search archived conversations
* [getConversationById](#getconversationbyid) - Get conversation by ID
* [deleteConversationById](#deleteconversationbyid) - Delete conversation
* [addMessage](#addmessage) - Add message (non-streaming)
* [addMessageStream](#addmessagestream) - Add message to a conversation with streaming response
* [updateConversationTitle](#updateconversationtitle) - Update conversation title
* [archiveConversation](#archiveconversation) - Archive conversation
* [unarchiveConversation](#unarchiveconversation) - Unarchive conversation
* [pinConversation](#pinconversation) - Pin conversation
* [unpinConversation](#unpinconversation) - Unpin conversation
* [regenerateAnswer](#regenerateanswer) - Regenerate AI response
* [forkConversation](#forkconversation) - Fork conversation from a message
* [cancelConversationStream](#cancelconversationstream) - Cancel an in-flight chat stream
* [updateMessageFeedback](#updatemessagefeedback) - Submit feedback on AI response

## createConversation

Start a new assistant conversation and wait for the complete answer.
The JSON counterpart of `POST /conversations/stream`, for API, SDK
and automation callers that do not consume SSE.

**How a turn runs**

1. The user's message is saved (in its own short transaction on a
   replica set).
2. The AI backend runs the same agent-loop pipeline as the `/stream`
   route and returns only its final result. No transaction is held
   during this call, and the call is never retried.
3. The answer, citations and status are saved exactly as the
   streaming route saves them, and the updated conversation is
   returned.

Every failure after step 1 is persisted: the conversation ends with
status `Failed`, a `failReason`, and an `error` message, and the
response carries `X-Conversation-Id` so the caller can fetch it.
A 4xx from the AI backend (for example no model configured) keeps
its status and user-facing message; other failures return 500 with
a generic message.

The response arrives only when the whole answer is ready, which can
take minutes for agent runs. Allow a generous client and proxy
timeout, or use the `/stream` variant for interactive clients.

**Modes**

`chatMode: agent` runs the universal agent and honours `tools` /
`agentCapabilities`; `internal_search` and `web_search` run the
search assistant and ignore `tools`. The legacy values `deep`,
`quick`, `verification` and `auto` are accepted and run as internal
search. Omitted, it defaults to internal search.


### Example Usage: filtered

<!-- UsageSnippet language="typescript" operationID="createConversation" method="post" path="/conversations/create" example="filtered" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.createConversation({
    query: "Summarize the Q4 sales report",
    filters: {
      kb: [
        "550e8400-e29b-41d4-a716-446655440000",
      ],
    },
    modelKey: "gpt-4-turbo",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsCreateConversation } from "@pipeshub-ai/sdk/funcs/conversations-create-conversation.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsCreateConversation(pipeshub, {
    query: "Summarize the Q4 sales report",
    filters: {
      kb: [
        "550e8400-e29b-41d4-a716-446655440000",
      ],
    },
    modelKey: "gpt-4-turbo",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsCreateConversation failed:", res.error);
  }
}

run();
```
### Example Usage: simple

<!-- UsageSnippet language="typescript" operationID="createConversation" method="post" path="/conversations/create" example="simple" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.createConversation({
    query: "What is our company's vacation policy?",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsCreateConversation } from "@pipeshub-ai/sdk/funcs/conversations-create-conversation.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsCreateConversation(pipeshub, {
    query: "What is our company's vacation policy?",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsCreateConversation failed:", res.error);
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

**Promise\<[operations.CreateConversationResponse](../../models/operations/create-conversation-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 424                         | application/json            |
| errors.ErrorResponse        | 500, 503, 504               | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## streamChat

Start a new conversation and stream the AI response over Server-Sent
Events (SSE). Behaves like `POST /conversations` but emits tokens,
tool activity, and status updates incrementally instead of returning
a single JSON response at the end.

**Lifecycle**

1. The server validates `query`, persists an in-progress
   conversation, then opens the SSE stream with HTTP `200`.
2. A `CUSTOM` event named `conversation_created` is emitted
   immediately with the new `conversationId` so the client can link
   the stream (sidebar, parallel tabs, deep links) without an extra
   request.
3. AI-backend events stream through (token chunks, tool calls,
   status, etc.).
4. On success a single root `RUN_FINISHED` event is emitted carrying
   the full persisted conversation in `result`.
5. On failure a root `RUN_ERROR` event is emitted and the
   conversation is marked FAILED before the stream closes.

**Event vocabulary**

AG-UI is the sole wire protocol. See `ConversationStreamSSEEvent`
for the full event enum and payload guidance.

Clients should ignore unknown event names rather than treating them
as errors.

**Agent mode**

When `chatMode` is `agent`,
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
    chatMode: "web_search",
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
    chatMode: "web_search",
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
| `request`                                                                                                                                                                      | [models.ConversationStreamRequest](../../models/conversation-stream-request.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<models.ConversationStreamSSEEvent>](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
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
With `source=owned`, conversations the caller pinned
(`PATCH /conversations/{conversationId}/pin`) come first, in the same order,
whatever `sortBy` is. `source=shared` is never pinned-first.

Query parameters not listed here are ignored, not refused.


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
| errors.ErrorResponse        | 400, 401, 403               | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getArchivedConversations

Retrieve all archived conversations for the authenticated user.

**Overview:**

Archived conversations are hidden from the main list but preserved for reference.
This endpoint returns only conversations where `isArchived: true` and `archivedBy`
is set. Results include conversations the caller owns and those shared with them
(`isShared` and the caller listed in `sharedWith`). Deleted and agent
conversations are never listed. Each item carries its `messages`.

**Filtering and sorting:**

Results can be narrowed using `search`, `shared`, `startDate`, `endDate`, and
`conversationId`. Sorting is controlled by `sortBy` and `sortOrder`. Pagination
is controlled by `page` and `limit`.

Query parameters not listed here are dropped by the validator and
ignored, including `projectId`, which `GET /conversations` accepts.

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
| errors.ErrorResponse        | 400, 401, 403               | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## searchArchivedConversations

Search across all archived conversations (assistant and agent) for the authenticated user.

**Overview:**

Performs a case-insensitive substring match against conversation titles and message content
across both assistant (`Conversation`) and agent (`AgentConversation`) archived collections.
Results are merged server-side and sorted by `lastActivityAt` descending.

**Search parameter:**

The `search` query parameter is required, must contain a non-space character, and is
capped at 1000 characters; it is trimmed before use. Requests that omit it, send only
spaces or exceed the cap return `400 VALIDATION_ERROR`. A value holding markup or a
printf-style format specifier (such as `%s`) is refused by the controller with
`400 HTTP_BAD_REQUEST`.

Query parameters not listed here are dropped by the validator and ignored.

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
| errors.ErrorResponse        | 400, 401, 403               | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getConversationById

Retrieve a specific conversation with its full message history.

**Overview:**

Returns the complete conversation including all messages, citations,
feedback, and metadata. Messages can be paginated for long conversations.

**Message Pagination:**

For conversations with many messages, use pagination parameters:

- `page`: Page number (default: 1)
- `limit`: Messages per page (default: 20)
- `sortBy`: Sort field (default: createdAt)
- `sortOrder`: 'asc' or 'desc' (default: desc)

**Access Control:**

Users can access conversations they own or that have been shared with them.

Query parameters not listed here are ignored, not refused.


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
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteConversationById

Delete a conversation by its ID.

**Overview:**

Performs a soft delete by setting `isDeleted: true`. The conversation is
removed from listings but preserved in the database. All citations
referenced by messages in the conversation are also soft-deleted.

**Permissions:**

Only the conversation's owner can delete it. The lookup also allows a
user the conversation is shared with at `write` access, but it
requires the caller to be the owner as well, so such a user is
answered `404`.

**Artifacts:** before the conversation is marked deleted, every artifact
the caller created in it is deleted for good (every version and stored
file), and so are older stored outputs of the conversation. If that cannot
be done the conversation is left in place and the error is returned
(for example 503); repeating the request finishes the cleanup.


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
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## addMessage

Ask a follow-up in an existing assistant conversation and wait for
the complete answer. The JSON counterpart of
`POST /conversations/{conversationId}/messages/stream`. Earlier turns
are sent to the model as history; project context comes from the
conversation, never from the request.

**How a turn runs**

1. The user's message is saved (in its own short transaction on a
   replica set).
2. The AI backend runs the same agent-loop pipeline as the `/stream`
   route and returns only its final result. No transaction is held
   during this call, and the call is never retried.
3. The answer, citations and status are saved exactly as the
   streaming route saves them, and the updated conversation is
   returned.

Every failure after step 1 is persisted: the conversation ends with
status `Failed`, a `failReason`, and an `error` message, and the
response carries `X-Conversation-Id` so the caller can fetch it.
A 4xx from the AI backend (for example no model configured) keeps
its status and user-facing message; other failures return 500 with
a generic message.

The response arrives only when the whole answer is ready, which can
take minutes for agent runs. Allow a generous client and proxy
timeout, or use the `/stream` variant for interactive clients.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="addMessage" method="post" path="/conversations/{conversationId}/messages" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.addMessage({
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

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsAddMessage } from "@pipeshub-ai/sdk/funcs/conversations-add-message.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsAddMessage(pipeshub, {
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
    console.log(result);
  } else {
    console.log("conversationsAddMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddMessageRequest](../../models/operations/add-message-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddMessageResponse](../../models/operations/add-message-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 424                         | application/json            |
| errors.ErrorResponse        | 500, 503, 504               | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## addMessageStream

Add a follow-up message to an existing conversation and stream the
assistant's response over Server-Sent Events.

Functionally equivalent to `POST /conversations/{conversationId}/messages`
but the response is delivered as an SSE stream so clients can render
the answer incrementally.

AG-UI is the sole wire protocol. The vocabulary is described by
`ConversationMessageStreamSSEEvent`; it is the same event set as
`/conversations/stream`, while the terminal result reflects an
existing conversation.


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
      chatMode: "internal_search",
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
      chatMode: "internal_search",
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

**Promise\<[EventStream<models.ConversationMessageStreamSSEEvent>](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403               | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
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
be owned by the caller (matched on `userId`), not be soft-deleted, and
not be an agent conversation. A user it is shared with, even at
`write` access, gets `404`.

Body fields other than `title` are dropped by the validator, not
refused.


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
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## archiveConversation

Archive a conversation to hide it from the main list.

**Overview:**

Archived conversations are preserved but hidden from the default conversation list.
Use archiving to clean up your workspace without permanently deleting conversations.

**Access:**

Only the conversation's owner can archive it: the lookup filters on
the caller's `userId`. It also has a branch for users the
conversation is shared with at `write` access, but that branch can
never match, so such users get `404` (a known defect). A missing,
deleted or agent conversation is `404` too.
Already-archived conversations return `400`.

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
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## unarchiveConversation

Restore an archived conversation.

- Path params: `conversationId`
- Query params: none
- Body: none

**Access:**

Only the conversation's owner can unarchive it: the lookup filters on
the caller's `userId`. It also has a branch for users the
conversation is shared with at `write` access, but that branch can
never match, so such users get `404` (a known defect). A missing,
deleted or agent conversation is `404` too.
A conversation that is not archived returns `400`.


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
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## pinConversation

Pin a conversation so it is listed first in the caller's own conversation list.

**Access:**

Owner only: the caller must be the conversation's `initiator`. People the
conversation is shared with, even with `write` access, cannot pin it, and
their own lists are not affected by the owner's pin.

**Behaviour:**

Idempotent: pinning an already pinned conversation succeeds and changes nothing.
Archived and deleted conversations cannot be pinned. Archiving a pinned
conversation removes its pin. Pinning does not change `lastActivityAt` or
`updatedAt`, so the conversation keeps its place among the other pinned chats.

- Path params: `conversationId`
- Query params: none
- Body: none


### Example Usage

<!-- UsageSnippet language="typescript" operationID="pinConversation" method="patch" path="/conversations/{conversationId}/pin" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.pinConversation({
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
import { conversationsPinConversation } from "@pipeshub-ai/sdk/funcs/conversations-pin-conversation.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsPinConversation(pipeshub, {
    conversationId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsPinConversation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PinConversationRequest](../../models/operations/pin-conversation-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ConversationPinResponse](../../models/conversation-pin-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## unpinConversation

Remove a conversation's pin so it is listed by recent activity again.

**Access:**

Owner only, as for `PATCH /conversations/{conversationId}/pin`.

**Behaviour:**

Idempotent: unpinning a conversation that is not pinned succeeds and changes nothing.

- Path params: `conversationId`
- Query params: none
- Body: none


### Example Usage

<!-- UsageSnippet language="typescript" operationID="unpinConversation" method="patch" path="/conversations/{conversationId}/unpin" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.unpinConversation({
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
import { conversationsUnpinConversation } from "@pipeshub-ai/sdk/funcs/conversations-unpin-conversation.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsUnpinConversation(pipeshub, {
    conversationId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsUnpinConversation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnpinConversationRequest](../../models/operations/unpin-conversation-request.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ConversationPinResponse](../../models/conversation-pin-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
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

**Editing the question:**

Send `query` to re-ask the last question with new wording. The answer
is regenerated for the edited question, which replaces the stored one
once the new answer is saved.

**Use Cases:**

- Response was incomplete or unclear
- Want to try a different AI model
- New documents have been indexed since original response

**Model Override:**

Specify `modelKey` to use a different model for regeneration.

**Streaming:**

The response is delivered as an AG-UI `text/event-stream` stream.
Routing still depends on `chatMode`: `internal_search` and
`web_search` use the assistant backend, while `agent` uses the
universal agent loop. See `SSEEvent` for the event vocabulary.


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
      answers: "User selections:\n1. \"Which region?\" → EU",
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
      answers: "User selections:\n1. \"Which region?\" → EU",
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
| errors.ErrorResponse        | 400, 401, 403               | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## forkConversation

Copy this conversation into a new private chat owned by the caller,
including every message up to and including `messageId`. The original
conversation is left unchanged.

Only the owner of the conversation can fork it. A shared recipient or a
project member gets 404, because their access to the original's
attachments and artifacts is revoked on unshare. The fork does not
inherit share settings. If the source is linked to a project the caller
can still see, the fork stays in that project but is private to the
caller; otherwise it is created outside the project.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="forkConversation" method="post" path="/conversations/{conversationId}/message/{messageId}/fork" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.forkConversation({
    conversationId: "<value>",
    messageId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { conversationsForkConversation } from "@pipeshub-ai/sdk/funcs/conversations-fork-conversation.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsForkConversation(pipeshub, {
    conversationId: "<value>",
    messageId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsForkConversation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ForkConversationRequest](../../models/operations/fork-conversation-request.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ForkConversationResponse](../../models/fork-conversation-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## cancelConversationStream

Cooperatively stop a `POST /conversations/stream` or
`POST /conversations/{conversationId}/messages/stream` run that is
still generating, using the `runId` sent when that stream started.

This is a synchronous JSON ack, not another SSE stream. The
cancelled run's own stream (if still connected) receives a terminal
frame with a `stopped` status and whatever partial answer had
already generated; nothing further is delivered here.

A `runId` that already finished or was never registered is not an
error either, but it is answered `{ cancelled: true }`, not `false`:
the query service's KV-backed run registry publishes the cancel for
other workers and acknowledges it as cancelled (a known defect).
`{ cancelled: false }` is only returned when that publish fails.

Only the conversation's owner (matched on `userId`) can cancel; any
other caller, or a missing, deleted or agent conversation, is `404`.

`runId` must belong to a run started on THIS `conversationId` — a
`runId` that exists but was registered under a different
conversation (even one owned by the same caller) is rejected with
`403`, same as a `runId` owned by a different user/org.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancelConversationStream" method="post" path="/conversations/{conversationId}/cancel" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.conversations.cancelConversationStream({
    conversationId: "<value>",
    body: {
      runId: "62326da7-dd7e-4ecc-9f64-2af864c12ca2",
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
import { conversationsCancelConversationStream } from "@pipeshub-ai/sdk/funcs/conversations-cancel-conversation-stream.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await conversationsCancelConversationStream(pipeshub, {
    conversationId: "<value>",
    body: {
      runId: "62326da7-dd7e-4ecc-9f64-2af864c12ca2",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsCancelConversationStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelConversationStreamRequest](../../models/operations/cancel-conversation-stream-request.md)                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CancelConversationStreamResponse](../../models/operations/cancel-conversation-stream-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateMessageFeedback

Append a feedback entry to a bot-response message.

**Overview**

Feedback helps improve AI response quality over time. You can record an
overall helpfulness signal, issue categories, and free-text comments.
Each call appends a new entry to the message; previous entries are
preserved.

**Feedback options**

- `isHelpful` — overall thumbs up/down.
- `categories` — issue or positive categories from a fixed list.
- `comments` — free-text `positive` and `negative`.

**Restrictions**

Feedback can only be submitted on `bot_response` messages — user
queries and system messages are rejected with `400`.

**Who can submit**

The conversation's initiator, or any user it is shared with (at any
access level) while `isShared` is `true`. Agent conversations are
`404` here.

Body fields other than `isHelpful`, `categories` and `comments` are
dropped by the validator, not refused. `metrics` is always computed
by the server.


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

**Promise\<[models.MessageFeedbackUpdateResponse](../../models/message-feedback-update-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |