# GetAllConversationsResponse

List of conversations

## Example Usage

```typescript
import { GetAllConversationsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetAllConversationsResponse = {
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

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `conversations`                                                                                         | [models.Conversation](../../models/conversation.md)[]                                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `sharedWithMeConversations`                                                                             | [models.Conversation](../../models/conversation.md)[]                                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `pagination`                                                                                            | [operations.GetAllConversationsPagination](../../models/operations/get-all-conversations-pagination.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `filters`                                                                                               | [operations.GetAllConversationsFilters](../../models/operations/get-all-conversations-filters.md)       | :heavy_minus_sign:                                                                                      | Applied and available filters                                                                           |
| `meta`                                                                                                  | [operations.GetAllConversationsMeta](../../models/operations/get-all-conversations-meta.md)             | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |