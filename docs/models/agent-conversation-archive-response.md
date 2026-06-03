# AgentConversationArchiveResponse

Envelope returned by `POST /agents/{agentKey}/conversations/{conversationId}/archive`.


## Example Usage

```typescript
import { AgentConversationArchiveResponse } from "@pipeshub-ai/sdk/models";

let value: AgentConversationArchiveResponse = {
  id: "<value>",
  status: "archived",
  archivedBy: "<value>",
  archivedAt: new Date("2026-09-08T13:09:27.649Z"),
  meta: {
    timestamp: new Date("2024-11-21T06:32:11.621Z"),
    duration: 84598,
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `status`                                                                                                                    | [models.AgentConversationArchiveResponseStatus](../models/agent-conversation-archive-response-status.md)                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `archivedBy`                                                                                                                | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `archivedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `meta`                                                                                                                      | [models.AgentConversationArchiveMeta](../models/agent-conversation-archive-meta.md)                                         | :heavy_check_mark:                                                                                                          | Request-scoped metadata returned by the archive route. `requestId` is<br/>omitted when upstream middleware did not attach one.<br/> |