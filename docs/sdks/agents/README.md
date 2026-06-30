# Agents

## Overview

Custom AI agents with specialized capabilities and tool integrations

### Available Operations

* [listAgents](#listagents) - List agents
* [createAgent](#createagent) - Create agent
* [getAgent](#getagent) - Get agent
* [updateAgent](#updateagent) - Update agent
* [deleteAgent](#deleteagent) - Delete agent
* [listAgentArchivedConversationsGrouped](#listagentarchivedconversationsgrouped) - List archived agent conversations grouped by agent
* [listAgentConversationArchives](#listagentconversationarchives) - List archived conversations for an agent
* [uploadAgentConversationChatAttachments](#uploadagentconversationchatattachments) - Upload agent chat attachments
* [deleteAgentConversationChatAttachment](#deleteagentconversationchatattachment) - Delete an agent chat attachment
* [streamAgentConversation](#streamagentconversation) - Create agent conversation with streaming response
* [streamAgentConversationMessage](#streamagentconversationmessage) - Add message to agent conversation with streaming response
* [regenerateAgentConversationMessage](#regenerateagentconversationmessage) - Regenerate agent conversation message
* [updateAgentConversationMessageFeedback](#updateagentconversationmessagefeedback) - Submit feedback for an agent message
* [archiveAgentConversation](#archiveagentconversation) - Archive an agent conversation
* [unarchiveAgentConversation](#unarchiveagentconversation) - Unarchive an agent conversation
* [updateAgentConversationTitle](#updateagentconversationtitle) - Update agent conversation title
* [deleteAgentConversationById](#deleteagentconversationbyid) - Delete an agent conversation
* [getAgentConversationById](#getagentconversationbyid) - Get agent conversation by ID
* [listAgentConversations](#listagentconversations) - List agent conversations

## listAgents

Retrieve a paginated list of agents available to the authenticated user.

**Overview**

Returns agents accessible through direct, team, or org-level permissions.
Search is performed across agent name, description, and tags. Sorting and
pagination are applied by the AI backend and the resulting envelope is
forwarded unchanged by the Node gateway.

**Gateway contract**

The Node route supports only these query params: `page`, `limit`, `search`,
`sort_by`, and `sort_order`.

The Python backend also understands `isDeleted`, but this gateway route
does not forward it, so it is not part of the public API contract here.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAgents" method="get" path="/agents" example="success" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.listAgents({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { agentsListAgents } from "@pipeshub-ai/sdk/funcs/agents-list-agents.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsListAgents(pipeshub, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsListAgents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAgentsRequest](../../models/operations/list-agents-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AgentListResponse](../../models/agent-list-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## createAgent

Create a new custom AI agent.

**Overview:**
Agents are specialized AI assistants configured for specific tasks.
They can have custom system prompts, access to specific tools, and
be limited to certain knowledge bases.

**Agent Configuration:**
- **System prompt:** Instructions that define agent behavior
- **Tools:** Capabilities like web search, code execution, etc.
- **Knowledge bases:** Data sources the agent can access
- **Model config:** AI model settings (temperature, max tokens)

**Use Cases:**
- Customer support bot with product knowledge
- Code review assistant with repository access
- HR assistant with policy documents


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAgent" method="post" path="/agents/create" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.createAgent({
    name: "Product Support Agent",
    models: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { agentsCreateAgent } from "@pipeshub-ai/sdk/funcs/agents-create-agent.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsCreateAgent(pipeshub, {
    name: "Product Support Agent",
    models: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsCreateAgent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AgentCreateRequest](../../models/agent-create-request.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AgentCreateResponse](../../models/agent-create-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getAgent

Retrieve agent details by its unique key.

**Gateway not-found behavior:**
Unknown `agentKey`, lookup after soft-delete, and other AI-backend failures
that return 404 from the Python query service are surfaced by the Node
gateway as **HTTP 404** with an `ErrorResponse` body.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAgent" method="get" path="/agents/{agentKey}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.getAgent({
    agentKey: "customer-support-agent",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { agentsGetAgent } from "@pipeshub-ai/sdk/funcs/agents-get-agent.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsGetAgent(pipeshub, {
    agentKey: "customer-support-agent",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsGetAgent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAgentRequest](../../models/operations/get-agent-request.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetAgentResponse](../../models/get-agent-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateAgent

Apply a partial update to an existing agent configuration.

**Gateway contract**

The Node gateway validates the request body via Zod middleware before
forwarding to the Python agent service. The `agentKey` path param and
the request body are both validated. Query parameters are ignored by
the controller.

**Update semantics**

Only fields present in the request body are updated. When `models` is
included, the gateway Zod middleware requires at least one model entry
and at least one object entry with `isReasoning: true`.

**Permissions**

The authenticated user must have `can_edit` on the agent (typically the
owner). Service-account and `shareWithOrg` transitions follow additional
Python business rules.

**Success response**

Returns a lightweight success envelope only. Use
`GET /agents/{agentKey}` to read the persisted agent after an update.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAgent" method="put" path="/agents/{agentKey}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.updateAgent({
    agentKey: "customer-support-agent",
    body: {
      name: "Renamed Agent",
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
import { agentsUpdateAgent } from "@pipeshub-ai/sdk/funcs/agents-update-agent.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsUpdateAgent(pipeshub, {
    agentKey: "customer-support-agent",
    body: {
      name: "Renamed Agent",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsUpdateAgent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAgentRequest](../../models/operations/update-agent-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AgentUpdateResponse](../../models/agent-update-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteAgent

Soft-delete an agent (tombstone) in the graph database.

**Overview:**
The Python query service marks the agent instance deleted inside a transaction.
List and search endpoints exclude tombstoned agents. Toolsets, tools, and
knowledge linked to the agent are not removed by this call.

**Permissions:**
Only the agent owner may delete (`can_delete` on the permission check).

**Warning:**
All conversations with this agent will become inaccessible.

**Gateway not-found behavior:**
Unknown `agentKey`, deleting an already-deleted agent, and `GET /agents/{agentKey}`
after delete return **HTTP 404** with an `ErrorResponse` body.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteAgent" method="delete" path="/agents/{agentKey}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.deleteAgent({
    agentKey: "customer-support-agent",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { agentsDeleteAgent } from "@pipeshub-ai/sdk/funcs/agents-delete-agent.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsDeleteAgent(pipeshub, {
    agentKey: "customer-support-agent",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsDeleteAgent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAgentRequest](../../models/operations/delete-agent-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AgentDeleteResponse](../../models/agent-delete-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 401, 404                    | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## listAgentArchivedConversationsGrouped

Returns archived agent conversations for the current user, grouped by
`agentKey`, with pagination over agent groups. Excludes conversations
whose agent was soft-deleted upstream.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAgentArchivedConversationsGrouped" method="get" path="/agents/conversations/show/archives" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.listAgentArchivedConversationsGrouped({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { agentsListAgentArchivedConversationsGrouped } from "@pipeshub-ai/sdk/funcs/agents-list-agent-archived-conversations-grouped.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsListAgentArchivedConversationsGrouped(pipeshub, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsListAgentArchivedConversationsGrouped failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAgentArchivedConversationsGroupedRequest](../../models/operations/list-agent-archived-conversations-grouped-request.md)                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AgentArchivedGroupsResponse](../../models/agent-archived-groups-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## listAgentConversationArchives

Paginated list of archived conversations for the given agent key.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAgentConversationArchives" method="get" path="/agents/{agentKey}/conversations/show/archives" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.listAgentConversationArchives({
    agentKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { agentsListAgentConversationArchives } from "@pipeshub-ai/sdk/funcs/agents-list-agent-conversation-archives.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsListAgentConversationArchives(pipeshub, {
    agentKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsListAgentConversationArchives failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAgentConversationArchivesRequest](../../models/operations/list-agent-conversation-archives-request.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AgentArchivedConversationListResponse](../../models/agent-archived-conversation-list-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## uploadAgentConversationChatAttachments

Multipart upload of PDF, JPEG, or PNG files for agent chat. Same limits as assistant
chat (`POST /conversations/attachments/upload`): up to 10 files, 5 MiB each. Proxies to
the AI backend. Optional `conversationId` associates uploads with an existing agent thread.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadAgentConversationChatAttachments" method="post" path="/agents/{agentKey}/conversations/attachments/upload" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.uploadAgentConversationChatAttachments({
    agentKey: "<value>",
    body: {
      files: [],
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
import { agentsUploadAgentConversationChatAttachments } from "@pipeshub-ai/sdk/funcs/agents-upload-agent-conversation-chat-attachments.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsUploadAgentConversationChatAttachments(pipeshub, {
    agentKey: "<value>",
    body: {
      files: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsUploadAgentConversationChatAttachments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadAgentConversationChatAttachmentsRequest](../../models/operations/upload-agent-conversation-chat-attachments-request.md)                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ChatAttachmentUploadResponse](../../models/chat-attachment-upload-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteAgentConversationChatAttachment

Deletes a previously uploaded attachment by proxying `DELETE` to the query service
(`/api/v1/chat/attachments/{recordId}`). The Node handler always ends the response **without
a JSON body** on success (empty body); the **status code** is the upstream status, or **204**
if none is returned.

On validation failure in the gateway (invalid / blank path params), the response is **400**
with a small JSON error object. Same fire-and-forget semantics as
`DELETE /conversations/attachments/{recordId}` on the client.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteAgentConversationChatAttachment" method="delete" path="/agents/{agentKey}/conversations/attachments/{recordId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  await pipeshub.agents.deleteAgentConversationChatAttachment({
    agentKey: "<value>",
    recordId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { agentsDeleteAgentConversationChatAttachment } from "@pipeshub-ai/sdk/funcs/agents-delete-agent-conversation-chat-attachment.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsDeleteAgentConversationChatAttachment(pipeshub, {
    agentKey: "<value>",
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("agentsDeleteAgentConversationChatAttachment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAgentConversationChatAttachmentRequest](../../models/operations/delete-agent-conversation-chat-attachment-request.md)                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.DeleteAgentConversationChatAttachmentBadRequestError | 400                                                         | application/json                                            |
| errors.PipeshubDefaultError                                 | 4XX, 5XX                                                    | \*/\*                                                       |

## streamAgentConversation

Start a new conversation with the specified agent and stream the AI
response as Server-Sent Events (SSE). The first user message is saved
and forwarded to the upstream agent backend; subsequent tokens, tool
calls, and lifecycle events are emitted on the open SSE connection.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="streamAgentConversation" method="post" path="/agents/{agentKey}/conversations/stream" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.streamAgentConversation({
    agentKey: "<value>",
    body: {
      query: "what are some latest tech news?",
      filters: {
        apps: [
          "2605c882-61d4-4aa2-b480-a68c957c151d",
          "ed6d6cc4-70bd-4838-9aeb-488e910c833a",
          "aeab9ddc-fb9b-47c8-ad98-bd4744e19555",
        ],
        kb: [
          "8747da12-4724-4a95-ac92-827b88d79647",
        ],
      },
      appliedFilters: {
        apps: [
          {
            id: "2605c882-61d4-4aa2-b480-a68c957c151d",
            name: "US Headlines, abcnews",
            nodeType: "app",
            connector: "RSS",
          },
          {
            id: "ed6d6cc4-70bd-4838-9aeb-488e910c833a",
            name: "ABC News RSS",
            nodeType: "app",
            connector: "RSS",
          },
          {
            id: "aeab9ddc-fb9b-47c8-ad98-bd4744e19555",
            name: "Hacker news rss",
            nodeType: "app",
            connector: "RSS",
          },
        ],
        kb: [
          {
            id: "8747da12-4724-4a95-ac92-827b88d79647",
            name: "Siddhant Ota's Private",
            nodeType: "recordGroup",
            connector: "KB",
          },
        ],
      },
      chatMode: "auto",
      modelKey: "5c1832f4-fa19-4167-b913-307fad3a6551",
      modelName: "gpt-5.4-mini",
      modelFriendlyName: "GPT 5.4 mini",
      timezone: "Asia/Kolkata",
      currentTime: new Date("2026-05-19T12:58:01+05:30"),
      tools: [],
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
import { agentsStreamAgentConversation } from "@pipeshub-ai/sdk/funcs/agents-stream-agent-conversation.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsStreamAgentConversation(pipeshub, {
    agentKey: "<value>",
    body: {
      query: "what are some latest tech news?",
      filters: {
        apps: [
          "2605c882-61d4-4aa2-b480-a68c957c151d",
          "ed6d6cc4-70bd-4838-9aeb-488e910c833a",
          "aeab9ddc-fb9b-47c8-ad98-bd4744e19555",
        ],
        kb: [
          "8747da12-4724-4a95-ac92-827b88d79647",
        ],
      },
      appliedFilters: {
        apps: [
          {
            id: "2605c882-61d4-4aa2-b480-a68c957c151d",
            name: "US Headlines, abcnews",
            nodeType: "app",
            connector: "RSS",
          },
          {
            id: "ed6d6cc4-70bd-4838-9aeb-488e910c833a",
            name: "ABC News RSS",
            nodeType: "app",
            connector: "RSS",
          },
          {
            id: "aeab9ddc-fb9b-47c8-ad98-bd4744e19555",
            name: "Hacker news rss",
            nodeType: "app",
            connector: "RSS",
          },
        ],
        kb: [
          {
            id: "8747da12-4724-4a95-ac92-827b88d79647",
            name: "Siddhant Ota's Private",
            nodeType: "recordGroup",
            connector: "KB",
          },
        ],
      },
      chatMode: "auto",
      modelKey: "5c1832f4-fa19-4167-b913-307fad3a6551",
      modelName: "gpt-5.4-mini",
      modelFriendlyName: "GPT 5.4 mini",
      timezone: "Asia/Kolkata",
      currentTime: new Date("2026-05-19T12:58:01+05:30"),
      tools: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("agentsStreamAgentConversation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StreamAgentConversationRequest](../../models/operations/stream-agent-conversation-request.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<models.AgentStreamSSEEvent>](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## streamAgentConversationMessage

Append a user message to an existing agent conversation and stream the
assistant reply over SSE.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="streamAgentConversationMessage" method="post" path="/agents/{agentKey}/conversations/{conversationId}/messages/stream" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.streamAgentConversationMessage({
    agentKey: "<value>",
    conversationId: "<value>",
    body: {
      query: "can you elaborate on the latest headlines?",
      filters: {
        apps: [
          "2605c882-61d4-4aa2-b480-a68c957c151d",
          "ed6d6cc4-70bd-4838-9aeb-488e910c833a",
        ],
        kb: [
          "8747da12-4724-4a95-ac92-827b88d79647",
        ],
      },
      appliedFilters: {
        apps: [
          {
            id: "2605c882-61d4-4aa2-b480-a68c957c151d",
            name: "US Headlines, abcnews",
            nodeType: "app",
            connector: "RSS",
          },
          {
            id: "ed6d6cc4-70bd-4838-9aeb-488e910c833a",
            name: "ABC News RSS",
            nodeType: "app",
            connector: "RSS",
          },
        ],
        kb: [
          {
            id: "8747da12-4724-4a95-ac92-827b88d79647",
            name: "Siddhant Ota's Private",
            nodeType: "recordGroup",
            connector: "KB",
          },
        ],
      },
      chatMode: "verification",
      modelKey: "5c1832f4-fa19-4167-b913-307fad3a6551",
      modelName: "gpt-5.4-mini",
      modelFriendlyName: "GPT 5.4 mini",
      timezone: "Asia/Kolkata",
      currentTime: new Date("2026-05-19T12:58:01+05:30"),
      tools: [],
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
import { agentsStreamAgentConversationMessage } from "@pipeshub-ai/sdk/funcs/agents-stream-agent-conversation-message.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsStreamAgentConversationMessage(pipeshub, {
    agentKey: "<value>",
    conversationId: "<value>",
    body: {
      query: "can you elaborate on the latest headlines?",
      filters: {
        apps: [
          "2605c882-61d4-4aa2-b480-a68c957c151d",
          "ed6d6cc4-70bd-4838-9aeb-488e910c833a",
        ],
        kb: [
          "8747da12-4724-4a95-ac92-827b88d79647",
        ],
      },
      appliedFilters: {
        apps: [
          {
            id: "2605c882-61d4-4aa2-b480-a68c957c151d",
            name: "US Headlines, abcnews",
            nodeType: "app",
            connector: "RSS",
          },
          {
            id: "ed6d6cc4-70bd-4838-9aeb-488e910c833a",
            name: "ABC News RSS",
            nodeType: "app",
            connector: "RSS",
          },
        ],
        kb: [
          {
            id: "8747da12-4724-4a95-ac92-827b88d79647",
            name: "Siddhant Ota's Private",
            nodeType: "recordGroup",
            connector: "KB",
          },
        ],
      },
      chatMode: "verification",
      modelKey: "5c1832f4-fa19-4167-b913-307fad3a6551",
      modelName: "gpt-5.4-mini",
      modelFriendlyName: "GPT 5.4 mini",
      timezone: "Asia/Kolkata",
      currentTime: new Date("2026-05-19T12:58:01+05:30"),
      tools: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("agentsStreamAgentConversationMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StreamAgentConversationMessageRequest](../../models/operations/stream-agent-conversation-message-request.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<models.AgentMessageStreamSSEEvent>](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## regenerateAgentConversationMessage

Regenerate the AI response for a specific message in an agent
conversation and stream the new answer over Server-Sent Events.

**Constraints:**

- Only the last message in the conversation can be regenerated.
- The target message must be of type `bot_response`.

**Request body:**

All request-body fields are optional. When omitted, the server reuses
the original model/context. The body supports:
- `filters`
- `chatMode`
- `modelKey`
- `modelName`
- `modelFriendlyName`
- `timezone`
- `currentTime`
- `tools`

**Streaming behavior:**

The response is delivered as `text/event-stream`. Stable events are
`connected`, `complete`, and `error`. Additional agent/tool lifecycle
events may be forwarded by the backend and should be treated as
informational updates.

Validation failures on params/body are returned as normal HTTP `400`
responses before the stream starts. Valid-shape requests that fail
conversation lookup or regenerate rules are reported as SSE `error`
events after stream initialization.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="regenerateAgentConversationMessage" method="post" path="/agents/{agentKey}/conversations/{conversationId}/message/{messageId}/regenerate" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.regenerateAgentConversationMessage({
    agentKey: "<value>",
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
import { agentsRegenerateAgentConversationMessage } from "@pipeshub-ai/sdk/funcs/agents-regenerate-agent-conversation-message.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsRegenerateAgentConversationMessage(pipeshub, {
    agentKey: "<value>",
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
    console.log("agentsRegenerateAgentConversationMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RegenerateAgentConversationMessageRequest](../../models/operations/regenerate-agent-conversation-message-request.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<models.AgentRegenerateSSEEvent>](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateAgentConversationMessageFeedback

Append structured feedback to a bot-response message in an agent
conversation. Uses the same request body shape as
`updateMessageFeedback` (helpfulness, categories, comments). Feedback
can only be submitted on `bot_response` messages.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAgentConversationMessageFeedback" method="post" path="/agents/{agentKey}/conversations/{conversationId}/message/{messageId}/feedback" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.updateAgentConversationMessageFeedback({
    agentKey: "<value>",
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
import { agentsUpdateAgentConversationMessageFeedback } from "@pipeshub-ai/sdk/funcs/agents-update-agent-conversation-message-feedback.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsUpdateAgentConversationMessageFeedback(pipeshub, {
    agentKey: "<value>",
    conversationId: "<value>",
    messageId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsUpdateAgentConversationMessageFeedback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAgentConversationMessageFeedbackRequest](../../models/operations/update-agent-conversation-message-feedback-request.md)                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MessageFeedbackUpdateResponse](../../models/message-feedback-update-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## archiveAgentConversation

Marks the conversation as archived for the authenticated owner.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="archiveAgentConversation" method="post" path="/agents/{agentKey}/conversations/{conversationId}/archive" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.archiveAgentConversation({
    agentKey: "<value>",
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
import { agentsArchiveAgentConversation } from "@pipeshub-ai/sdk/funcs/agents-archive-agent-conversation.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsArchiveAgentConversation(pipeshub, {
    agentKey: "<value>",
    conversationId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsArchiveAgentConversation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ArchiveAgentConversationRequest](../../models/operations/archive-agent-conversation-request.md)                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AgentConversationArchiveResponse](../../models/agent-conversation-archive-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 404               | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## unarchiveAgentConversation

Restores an archived agent conversation to the active list.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unarchiveAgentConversation" method="post" path="/agents/{agentKey}/conversations/{conversationId}/unarchive" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.unarchiveAgentConversation({
    agentKey: "<value>",
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
import { agentsUnarchiveAgentConversation } from "@pipeshub-ai/sdk/funcs/agents-unarchive-agent-conversation.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsUnarchiveAgentConversation(pipeshub, {
    agentKey: "<value>",
    conversationId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsUnarchiveAgentConversation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnarchiveAgentConversationRequest](../../models/operations/unarchive-agent-conversation-request.md)                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AgentConversationUnarchiveResponse](../../models/agent-conversation-unarchive-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 404               | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateAgentConversationTitle

Updates the display title for an agent conversation owned by the caller.

The controller looks up the conversation by `_id`, `orgId`, `userId`,
`agentKey`, and `isDeleted: false`.

The request body uses the shared title validator (`1..200` chars), and
the controller trims the incoming title before saving it. A whitespace-only
title can therefore still return HTTP 400 even if the raw string is
non-empty.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAgentConversationTitle" method="patch" path="/agents/{agentKey}/conversations/{conversationId}/title" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.updateAgentConversationTitle({
    agentKey: "<value>",
    conversationId: "<value>",
    body: {
      title: "ABC News Follow-up",
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
import { agentsUpdateAgentConversationTitle } from "@pipeshub-ai/sdk/funcs/agents-update-agent-conversation-title.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsUpdateAgentConversationTitle(pipeshub, {
    agentKey: "<value>",
    conversationId: "<value>",
    body: {
      title: "ABC News Follow-up",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsUpdateAgentConversationTitle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAgentConversationTitleRequest](../../models/operations/update-agent-conversation-title-request.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AgentConversationTitleUpdateResponse](../../models/agent-conversation-title-update-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 404               | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteAgentConversationById

Soft-deletes an agent conversation owned by the authenticated user.

The controller scopes the lookup by `_id`, `orgId`, `userId`, and
`agentKey`. If no matching writable conversation is found, the route is
intentionally a no-op and still returns HTTP 200 with `conversation: null`.

This makes the operation idempotent:

- deleting a nonexistent conversation returns success with `null`
- deleting through a different `agentKey` returns success with `null`
- deleting an already deleted conversation returns success with `null`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteAgentConversationById" method="delete" path="/agents/{agentKey}/conversations/{conversationId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.deleteAgentConversationById({
    agentKey: "<value>",
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
import { agentsDeleteAgentConversationById } from "@pipeshub-ai/sdk/funcs/agents-delete-agent-conversation-by-id.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsDeleteAgentConversationById(pipeshub, {
    agentKey: "<value>",
    conversationId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsDeleteAgentConversationById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAgentConversationByIdRequest](../../models/operations/delete-agent-conversation-by-id-request.md)                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AgentConversationDeleteResponse](../../models/agent-conversation-delete-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401                    | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getAgentConversationById

Returns the conversation with paginated/sorted messages and filter metadata.

**Message Pagination:**

Messages are paginated newest-first: `page=1` returns the most recent
batch. Increment `page` to load older batches (used by the infinite-scroll
"load older messages" feature).

- `page`: Page number (default: 1)
- `limit`: Messages per page (default: 20, max: 100)


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAgentConversationById" method="get" path="/agents/{agentKey}/conversations/{conversationId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.getAgentConversationById({
    agentKey: "<value>",
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
import { agentsGetAgentConversationById } from "@pipeshub-ai/sdk/funcs/agents-get-agent-conversation-by-id.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsGetAgentConversationById(pipeshub, {
    agentKey: "<value>",
    conversationId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsGetAgentConversationById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAgentConversationByIdRequest](../../models/operations/get-agent-conversation-by-id-request.md)                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AgentConversationDetailResponse](../../models/agent-conversation-detail-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## listAgentConversations

Paginated list of conversations for the agent (owned and shared-with-me),
excluding archived threads.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAgentConversations" method="get" path="/agents/{agentKey}/conversations" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.agents.listAgentConversations({
    agentKey: "<value>",
    startDate: "2026-05-26T00:00:00.000Z",
    endDate: "2026-05-27T00:00:00.000Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { agentsListAgentConversations } from "@pipeshub-ai/sdk/funcs/agents-list-agent-conversations.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await agentsListAgentConversations(pipeshub, {
    agentKey: "<value>",
    startDate: "2026-05-26T00:00:00.000Z",
    endDate: "2026-05-27T00:00:00.000Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsListAgentConversations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAgentConversationsRequest](../../models/operations/list-agent-conversations-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AgentConversationListResponse](../../models/agent-conversation-list-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |