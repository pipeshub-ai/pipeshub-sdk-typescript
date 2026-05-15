# SemanticSearchHistoryFiltersAvailable

Catalogue of filters the endpoint supports, plus their current values
and `applied` flags. Built by `buildFiltersMetadata` (utils.ts:430-624).


## Example Usage

```typescript
import { SemanticSearchHistoryFiltersAvailable } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchHistoryFiltersAvailable = {
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
      description: "majestically considering phooey technologist waltz deflect",
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
      description: "majestically considering phooey technologist waltz deflect",
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `shared`                                                                                                                                                                                                                                                                                                                                                   | [models.SemanticSearchHistoryFilterToggle](../models/semantic-search-history-filter-toggle.md)                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                         | Generic "filter X is available, current value is Y" block used for<br/>`shared`, `tags`, `minMessages`, `search`, and `messageType`. Either<br/>`type` (free-form value) or `values` (enum of allowed strings) is<br/>present, not both. `current` is the caller-supplied value passed<br/>through from `req.query`, hence string-or-null even when `type` is<br/>`'number'`.<br/> |
| `tags`                                                                                                                                                                                                                                                                                                                                                     | [models.SemanticSearchHistoryFilterToggle](../models/semantic-search-history-filter-toggle.md)                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                         | Generic "filter X is available, current value is Y" block used for<br/>`shared`, `tags`, `minMessages`, `search`, and `messageType`. Either<br/>`type` (free-form value) or `values` (enum of allowed strings) is<br/>present, not both. `current` is the caller-supplied value passed<br/>through from `req.query`, hence string-or-null even when `type` is<br/>`'number'`.<br/> |
| `minMessages`                                                                                                                                                                                                                                                                                                                                              | [models.SemanticSearchHistoryFilterToggle](../models/semantic-search-history-filter-toggle.md)                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                         | Generic "filter X is available, current value is Y" block used for<br/>`shared`, `tags`, `minMessages`, `search`, and `messageType`. Either<br/>`type` (free-form value) or `values` (enum of allowed strings) is<br/>present, not both. `current` is the caller-supplied value passed<br/>through from `req.query`, hence string-or-null even when `type` is<br/>`'number'`.<br/> |
| `search`                                                                                                                                                                                                                                                                                                                                                   | [models.SemanticSearchHistoryFilterToggle](../models/semantic-search-history-filter-toggle.md)                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                         | Generic "filter X is available, current value is Y" block used for<br/>`shared`, `tags`, `minMessages`, `search`, and `messageType`. Either<br/>`type` (free-form value) or `values` (enum of allowed strings) is<br/>present, not both. `current` is the caller-supplied value passed<br/>through from `req.query`, hence string-or-null even when `type` is<br/>`'number'`.<br/> |
| `pagination`                                                                                                                                                                                                                                                                                                                                               | [models.SemanticSearchHistoryFiltersAvailablePagination](../models/semantic-search-history-filters-available-pagination.md)                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                                                                        |
| `sorting`                                                                                                                                                                                                                                                                                                                                                  | [models.Sorting](../models/sorting.md)                                                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                                                                        |
| `dateFilters`                                                                                                                                                                                                                                                                                                                                              | [models.DateFilters](../models/date-filters.md)                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                                                                        |
| `messageFilters`                                                                                                                                                                                                                                                                                                                                           | [models.MessageFilters](../models/message-filters.md)                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                                                                        |
| `sortingMessages`                                                                                                                                                                                                                                                                                                                                          | [models.SortingMessages](../models/sorting-messages.md)                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                                                                        |