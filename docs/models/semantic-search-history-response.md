# SemanticSearchHistoryResponse

Envelope returned by `GET /search`. The handler runs `find()` plus
`countDocuments()` in parallel and assembles `{ searchHistory,
pagination, filters, meta }` (es_controller.ts:3925-3973).


## Example Usage

```typescript
import { SemanticSearchHistoryResponse } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchHistoryResponse = {
  searchHistory: [],
  pagination: {
    page: 541823,
    limit: 942421,
    totalCount: 463579,
    totalPages: 370350,
    hasNextPage: true,
    hasPrevPage: false,
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
    timestamp: new Date("2026-08-11T07:36:09.276Z"),
    duration: 207471,
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `searchHistory`                                                                                                                                                          | [models.SemanticSearchHistoryItem](../models/semantic-search-history-item.md)[]                                                                                          | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `pagination`                                                                                                                                                             | [models.SemanticSearchHistoryPagination](../models/semantic-search-history-pagination.md)                                                                                | :heavy_check_mark:                                                                                                                                                       | Pagination block emitted by `buildPaginationMetadata` (utils.ts:417).<br/>`totalPages` is `Math.ceil(totalCount / limit)`, so an empty result<br/>has `totalPages: 0`, not `1`.<br/> |
| `filters`                                                                                                                                                                | [models.SemanticSearchHistoryFilters](../models/semantic-search-history-filters.md)                                                                                      | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `meta`                                                                                                                                                                   | [models.SemanticSearchHistoryMeta](../models/semantic-search-history-meta.md)                                                                                            | :heavy_check_mark:                                                                                                                                                       | `requestId` comes from `req.context?.requestId` and is omitted from<br/>the JSON when upstream middleware did not set it.<br/>                                           |