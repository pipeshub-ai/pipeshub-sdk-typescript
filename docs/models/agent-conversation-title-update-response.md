# AgentConversationTitleUpdateResponse

## Example Usage

```typescript
import { AgentConversationTitleUpdateResponse } from "@pipeshub-ai/sdk/models";

let value: AgentConversationTitleUpdateResponse = {
  conversation: {},
  meta: {
    timestamp: new Date("2024-01-27T10:12:39.475Z"),
    duration: 573628,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `conversation`                                                           | [models.StoredAgentConversation](../models/stored-agent-conversation.md) | :heavy_check_mark:                                                       | Stored agent conversation document returned by non-list endpoints.<br/>  |
| `meta`                                                                   | [models.RequestMeta](../models/request-meta.md)                          | :heavy_check_mark:                                                       | Basic request metadata returned by the API.                              |