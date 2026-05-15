# SemanticSearchHistoryFilters

## Example Usage

```typescript
import { SemanticSearchHistoryFilters } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchHistoryFilters = {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applied`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | [models.SemanticSearchHistoryFiltersApplied](../models/semantic-search-history-filters-applied.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Echo of which filters the caller actually supplied, built by<br/>`buildFiltersMetadata` (utils.ts:430-486). `page` and `limit` always<br/>appear because they are normalised to defaults before being recorded,<br/>so `filters` is never empty and `values` always contains at least<br/>`{ page, limit }`. Other keys appear only when the matching query<br/>param was non-empty (or, for `dateRange`, when `createdAt` was set<br/>on the Mongo filter).<br/><br/>`values` keys are scalar strings rather than typed primitives<br/>(`'true'`/`'false'`, `'5'`, etc.) because they are passed through<br/>from `req.query` as Express parsed them — only `page` and `limit`<br/>are coerced to integers via `safeParsePagination`.<br/> |
| `available`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [models.SemanticSearchHistoryFiltersAvailable](../models/semantic-search-history-filters-available.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Catalogue of filters the endpoint supports, plus their current values<br/>and `applied` flags. Built by `buildFiltersMetadata` (utils.ts:430-624).<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |