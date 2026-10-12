# CreateAgentConversationResponse

Envelope returned by `POST /agents/{agentKey}/conversations`: the
persisted agent conversation (initial user message plus the agent's
answer) and request metadata.


## Example Usage

```typescript
import { CreateAgentConversationResponse } from "@pipeshub-ai/sdk/models";

let value: CreateAgentConversationResponse = {
  conversation: {},
  meta: {
    timestamp: new Date("2026-09-25T15:43:56.503Z"),
    duration: 731315,
  },
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `conversation`                                                                                                                    | [models.AgentConversation](../models/agent-conversation.md)                                                                       | :heavy_check_mark:                                                                                                                | A conversation with a specific AI agent. Similar to regular conversations<br/>but tied to an agent's configuration and capabilities.<br/> |
| `meta`                                                                                                                            | [models.CreateAgentConversationResponseMeta](../models/create-agent-conversation-response-meta.md)                                | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |