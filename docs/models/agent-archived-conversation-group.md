# AgentArchivedConversationGroup

Archived conversations for a single agent, sliced to the first page
of the per-agent archive query (limit 5, sorted newest first).


## Example Usage

```typescript
import { AgentArchivedConversationGroup } from "@pipeshub-ai/sdk/models";

let value: AgentArchivedConversationGroup = {
  agentKey: "<value>",
  conversations: [],
  pagination: {
    page: 541823,
    limit: 942421,
    totalCount: 463579,
    totalPages: 370350,
    hasNextPage: true,
    hasPrevPage: false,
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `agentKey`                                                                                                                                                               | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | Agent identifier the conversations belong to.                                                                                                                            |
| `conversations`                                                                                                                                                          | [models.AgentConversationListItem](../models/agent-conversation-list-item.md)[]                                                                                          | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `pagination`                                                                                                                                                             | [models.SemanticSearchHistoryPagination](../models/semantic-search-history-pagination.md)                                                                                | :heavy_check_mark:                                                                                                                                                       | Pagination block emitted by `buildPaginationMetadata` (utils.ts:417).<br/>`totalPages` is `Math.ceil(totalCount / limit)`, so an empty result<br/>has `totalPages: 0`, not `1`.<br/> |