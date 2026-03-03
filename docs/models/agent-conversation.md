# AgentConversation

A conversation with a specific AI agent. Similar to regular conversations
but tied to an agent's configuration and capabilities.


## Example Usage

```typescript
import { AgentConversation } from "@pipeshub-ai/sdk/models";

let value: AgentConversation = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `agentKey`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The agent this conversation is with                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `messages`                                                                                    | [models.Message](../models/message.md)[]                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.AgentConversationStatus](../models/agent-conversation-status.md)                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isShared`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sharedWith`                                                                                  | [models.AgentConversationSharedWith](../models/agent-conversation-shared-with.md)[]           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastActivityAt`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |