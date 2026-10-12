# CancelAgentConversationStreamRequest

## Example Usage

```typescript
import { CancelAgentConversationStreamRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CancelAgentConversationStreamRequest = {
  agentKey: "<value>",
  conversationId: "<value>",
  body: {
    runId: "8f3ac67f-3e48-4ff9-868b-56b5bbfb63f5",
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `agentKey`                                                                                                                      | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Stable key identifying the agent that owns this conversation.                                                                   |
| `conversationId`                                                                                                                | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | ID of the agent conversation to cancel a run for.                                                                               |
| `body`                                                                                                                          | [operations.CancelAgentConversationStreamRequestBody](../../models/operations/cancel-agent-conversation-stream-request-body.md) | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |