# GetArchivedConversationsResponse

List of archived conversations

## Example Usage

```typescript
import { GetArchivedConversationsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetArchivedConversationsResponse = {
  conversations: [
    {
      title: "Q4 Financial Report Discussion",
    },
  ],
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `conversations`                                                                                                   | [models.Conversation](../../models/conversation.md)[]                                                             | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `pagination`                                                                                                      | [operations.GetArchivedConversationsPagination](../../models/operations/get-archived-conversations-pagination.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `filters`                                                                                                         | [operations.GetArchivedConversationsFilters](../../models/operations/get-archived-conversations-filters.md)       | :heavy_minus_sign:                                                                                                | Applied and available filters                                                                                     |
| `summary`                                                                                                         | [operations.Summary](../../models/operations/summary.md)                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `meta`                                                                                                            | [operations.GetArchivedConversationsMeta](../../models/operations/get-archived-conversations-meta.md)             | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |