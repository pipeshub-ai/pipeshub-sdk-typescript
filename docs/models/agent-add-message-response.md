# AgentAddMessageResponse

Envelope returned by
`POST /agents/{agentKey}/conversations/{conversationId}/messages`:
the updated agent conversation, the number of citation records used
to ground the answer for this turn, and request metadata.


## Example Usage

```typescript
import { AgentAddMessageResponse } from "@pipeshub-ai/sdk/models";

let value: AgentAddMessageResponse = {
  conversation: {},
  recordsUsed: 160920,
  meta: {
    timestamp: new Date("2024-06-25T17:34:13.119Z"),
    duration: 866324,
    recordsUsed: 850686,
  },
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `conversation`                                                                                                                    | [models.AgentConversation](../models/agent-conversation.md)                                                                       | :heavy_check_mark:                                                                                                                | A conversation with a specific AI agent. Similar to regular conversations<br/>but tied to an agent's configuration and capabilities.<br/> |
| `recordsUsed`                                                                                                                     | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | Number of citation records used to ground the answer generated for this turn.                                                     |
| `meta`                                                                                                                            | [models.AgentAddMessageResponseMeta](../models/agent-add-message-response-meta.md)                                                | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |