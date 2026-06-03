# AgentConversationUnarchiveResponse

Envelope returned by `POST /agents/{agentKey}/conversations/{conversationId}/unarchive`.


## Example Usage

```typescript
import { AgentConversationUnarchiveResponse } from "@pipeshub-ai/sdk/models";

let value: AgentConversationUnarchiveResponse = {
  id: "<value>",
  status: "unarchived",
  unarchivedBy: "<value>",
  unarchivedAt: new Date("2026-10-12T05:37:31.142Z"),
  meta: {
    timestamp: new Date("2024-07-01T08:19:51.646Z"),
    duration: 964517,
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `status`                                                                                                                      | [models.AgentConversationUnarchiveResponseStatus](../models/agent-conversation-unarchive-response-status.md)                  | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `unarchivedBy`                                                                                                                | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `unarchivedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `meta`                                                                                                                        | [models.AgentConversationUnarchiveMeta](../models/agent-conversation-unarchive-meta.md)                                       | :heavy_check_mark:                                                                                                            | Request-scoped metadata returned by the unarchive route. `requestId` is<br/>omitted when upstream middleware did not attach one.<br/> |