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

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `conversations`                                                                                                         | [operations.GetArchivedConversationsConversation](../../models/operations/get-archived-conversations-conversation.md)[] | :heavy_minus_sign:                                                                                                      | Archived conversations matching the filter                                                                              |
| `pagination`                                                                                                            | [operations.GetArchivedConversationsPagination](../../models/operations/get-archived-conversations-pagination.md)       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `filters`                                                                                                               | [operations.GetArchivedConversationsFilters](../../models/operations/get-archived-conversations-filters.md)             | :heavy_minus_sign:                                                                                                      | Filters applied to this request and filters available for clients to use                                                |
| `summary`                                                                                                               | [operations.GetArchivedConversationsSummary](../../models/operations/get-archived-conversations-summary.md)             | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `meta`                                                                                                                  | [operations.GetArchivedConversationsMeta](../../models/operations/get-archived-conversations-meta.md)                   | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |