# AgentConversationDeleteResponse

Envelope returned by `DELETE /agents/{agentKey}/conversations/{conversationId}`.
When the conversation does not exist, belongs to a different agent, or
was already deleted, the API still returns HTTP 200 with
`conversation: null`.


## Example Usage

```typescript
import { AgentConversationDeleteResponse } from "@pipeshub-ai/sdk/models";

let value: AgentConversationDeleteResponse = {
  message: "Conversation deleted successfully",
  conversation: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `message`                                                                | [models.MessageEnum](../models/message-enum.md)                          | :heavy_check_mark:                                                       | N/A                                                                      |
| `conversation`                                                           | [models.StoredAgentConversation](../models/stored-agent-conversation.md) | :heavy_check_mark:                                                       | Stored agent conversation document returned by non-list endpoints.<br/>  |