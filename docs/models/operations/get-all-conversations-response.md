# GetAllConversationsResponse

List of conversations for the requested source

## Example Usage

```typescript
import { GetAllConversationsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetAllConversationsResponse = {
  conversations: [],
  source: "shared",
  pagination: {},
  filters: {
    applied: {
      filters: [],
      values: {},
    },
    available: {
      shared: {},
      tags: {},
      minMessages: {},
      search: {},
      pagination: {},
      sorting: {},
      dateFilters: {},
      messageFilters: {},
      sortingMessages: {},
    },
  },
  meta: {},
};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conversations`                                                                                                                                                                       | [models.ConversationListItem](../../models/conversation-list-item.md)[]                                                                                                               | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |
| `source`                                                                                                                                                                              | [operations.GetAllConversationsSourceResponse](../../models/operations/get-all-conversations-source-response.md)                                                                      | :heavy_check_mark:                                                                                                                                                                    | Echoes the requested `source` query value.                                                                                                                                            |
| `pagination`                                                                                                                                                                          | [operations.GetAllConversationsPagination](../../models/operations/get-all-conversations-pagination.md)                                                                               | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |
| `filters`                                                                                                                                                                             | [operations.GetAllConversationsFilters](../../models/operations/get-all-conversations-filters.md)                                                                                     | :heavy_check_mark:                                                                                                                                                                    | Filter introspection block. `applied` summarises the<br/>filters active on this request; `available` catalogues<br/>every supported filter with its current value and whether<br/>it is applied.<br/> |
| `meta`                                                                                                                                                                                | [operations.GetAllConversationsMeta](../../models/operations/get-all-conversations-meta.md)                                                                                           | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |