# ListAgentConversationsResponse

List of agent conversations

## Example Usage

```typescript
import { ListAgentConversationsResponse } from "pipeshub/models/operations";

let value: ListAgentConversationsResponse = {
  conversations: [
    {
      title: "Q4 Financial Report Discussion",
    },
  ],
  sharedWithMeConversations: [
    {
      title: "Q4 Financial Report Discussion",
    },
  ],
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `conversations`                                                                                               | [models.Conversation](../../models/conversation.md)[]                                                         | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `sharedWithMeConversations`                                                                                   | [models.Conversation](../../models/conversation.md)[]                                                         | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `pagination`                                                                                                  | [operations.ListAgentConversationsPagination](../../models/operations/list-agent-conversations-pagination.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `filters`                                                                                                     | [operations.ListAgentConversationsFilters](../../models/operations/list-agent-conversations-filters.md)       | :heavy_minus_sign:                                                                                            | Applied and available filters                                                                                 |
| `meta`                                                                                                        | [operations.ListAgentConversationsMeta](../../models/operations/list-agent-conversations-meta.md)             | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |