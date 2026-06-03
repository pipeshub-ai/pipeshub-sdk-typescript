# AgentArchivedGroupsResponse

Response from `GET /agents/conversations/show/archives` — archived agent
conversations grouped by `agentKey`, with agent-level pagination over
the groups and a fixed slice of conversations under each agent.


## Example Usage

```typescript
import { AgentArchivedGroupsResponse } from "@pipeshub-ai/sdk/models";

let value: AgentArchivedGroupsResponse = {
  groups: [],
  agentPagination: {
    page: 560667,
    limit: 346265,
    totalCount: 990163,
    totalPages: 658765,
    hasNextPage: true,
    hasPrevPage: false,
  },
  meta: {
    timestamp: new Date("2024-01-27T10:12:39.475Z"),
    duration: 573628,
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `groups`                                                                                                                                                                 | [models.AgentArchivedConversationGroup](../models/agent-archived-conversation-group.md)[]                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `agentPagination`                                                                                                                                                        | [models.SemanticSearchHistoryPagination](../models/semantic-search-history-pagination.md)                                                                                | :heavy_check_mark:                                                                                                                                                       | Pagination block emitted by `buildPaginationMetadata` (utils.ts:417).<br/>`totalPages` is `Math.ceil(totalCount / limit)`, so an empty result<br/>has `totalPages: 0`, not `1`.<br/> |
| `meta`                                                                                                                                                                   | [models.RequestMeta](../models/request-meta.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                       | Basic request metadata returned by the API.                                                                                                                              |