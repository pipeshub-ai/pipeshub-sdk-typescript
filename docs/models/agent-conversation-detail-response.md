# AgentConversationDetailResponse

Envelope returned by `GET /agents/{agentKey}/conversations/{conversationId}`.


## Example Usage

```typescript
import { AgentConversationDetailResponse } from "@pipeshub-ai/sdk/models";

let value: AgentConversationDetailResponse = {
  conversation: {
    id: "<value>",
    createdAt: new Date("2026-07-24T01:56:07.286Z"),
    isShared: false,
    sharedWith: [],
    messages: [
      {},
    ],
    pagination: {
      page: 773583,
      limit: 794657,
      totalCount: 349869,
      totalPages: 320693,
      hasNextPage: true,
      hasPrevPage: true,
      messageRange: {
        start: 647137,
        end: 943674,
      },
    },
    access: {},
  },
  filters: {
    applied: {
      filters: [],
      values: {},
    },
    available: {
      shared: {
        description:
          "wire masticate ha charming intrigue beyond correctly boo yahoo seriously",
        current: "<value>",
        applied: true,
      },
      tags: {
        description: "or brace until honesty pupil terraform up",
        current: "<value>",
        applied: true,
      },
      minMessages: {
        description: "reluctantly yet enormously pfft yuck",
        current: "<value>",
        applied: false,
      },
      search: {
        description: "lest quarrelsome ethical beard rewarding ah flint hence",
        current: "<value>",
        applied: false,
      },
      pagination: {
        page: {
          type: "<value>",
          current: 25199,
          min: 262516,
          max: 734785,
          default: 444618,
          description: "rosemary mediocre boohoo hotfoot upward",
          applied: false,
        },
        limit: {
          type: "<value>",
          current: 866840,
          min: 509357,
          max: 177601,
          default: 743483,
          description: "usefully culture ownership anti",
          applied: true,
        },
      },
      sorting: {
        sortBy: {
          values: [],
          default: "<value>",
          description:
            "majestically considering phooey technologist waltz deflect",
          current: "<value>",
        },
        sortOrder: {
          values: [
            "<value 1>",
          ],
          default: "<value>",
          description: "dreary intrepid throughout",
          current: "<value>",
        },
      },
      dateFilters: {
        dateRange: {
          type: "<value>",
          description:
            "until past busy blah clear-cut without incidentally airline yearningly",
          format: "<value>",
          current: {
            start: "<value>",
            end: "<value>",
          },
          applied: true,
        },
      },
      messageFilters: {
        messageType: {
          description: "wafer minus ick on supposing acquaintance",
          current: "<value>",
          applied: true,
        },
      },
      sortingMessages: {
        sortBy: {
          values: [],
          default: "<value>",
          description:
            "majestically considering phooey technologist waltz deflect",
          current: "<value>",
        },
        sortOrder: {
          values: [
            "<value 1>",
          ],
          default: "<value>",
          description: "dreary intrepid throughout",
          current: "<value>",
        },
      },
    },
  },
  meta: {
    timestamp: new Date("2024-06-23T10:29:28.582Z"),
    duration: 370834,
    conversationId: "<value>",
    messageCount: 168093,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conversation`                                                                                                                                                                                                                                                  | [models.AgentConversationDetail](../models/agent-conversation-detail.md)                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                              | Reduced conversation view returned by the by-id GET route. This is<br/>not the raw `AgentConversation` document shape: fields like `agentKey`,<br/>`userId`, `orgId`, `conversationSource`, and root-level `messages`<br/>metadata outside the selected slice are omitted.<br/> |
| `filters`                                                                                                                                                                                                                                                       | [models.SemanticSearchHistoryFilters](../models/semantic-search-history-filters.md)                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |
| `meta`                                                                                                                                                                                                                                                          | [models.AgentConversationDetailMeta](../models/agent-conversation-detail-meta.md)                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                              | Request-scoped metadata returned by the by-id GET route. `requestId`<br/>is omitted when upstream middleware did not attach one.<br/>                                                                                                                           |