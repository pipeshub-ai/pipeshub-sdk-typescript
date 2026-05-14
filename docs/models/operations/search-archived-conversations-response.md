# SearchArchivedConversationsResponse

Search results across archived conversations

## Example Usage

```typescript
import { SearchArchivedConversationsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: SearchArchivedConversationsResponse = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `conversations`                                                                                                               | [operations.SearchArchivedConversationsConversation](../../models/operations/search-archived-conversations-conversation.md)[] | :heavy_minus_sign:                                                                                                            | Archived conversations (assistant and agent) matching the search term                                                         |
| `pagination`                                                                                                                  | [operations.SearchArchivedConversationsPagination](../../models/operations/search-archived-conversations-pagination.md)       | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `summary`                                                                                                                     | [operations.SearchArchivedConversationsSummary](../../models/operations/search-archived-conversations-summary.md)             | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `meta`                                                                                                                        | [operations.SearchArchivedConversationsMeta](../../models/operations/search-archived-conversations-meta.md)                   | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |