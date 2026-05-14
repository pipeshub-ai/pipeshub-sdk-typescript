# SortingMessages

## Example Usage

```typescript
import { SortingMessages } from "@pipeshub-ai/sdk/models";

let value: SortingMessages = {
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
};
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sortBy`                                                                                                                                                                                                     | [models.SemanticSearchHistorySortField](../models/semantic-search-history-sort-field.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | Used for `available.sorting.{sortBy,sortOrder}` and<br/>`available.sortingMessages.{sortBy,sortOrder}`. The `applied` flag<br/>is present on `sorting.*` and absent on `sortingMessages.*`, so it<br/>is optional here.<br/> |
| `sortOrder`                                                                                                                                                                                                  | [models.SemanticSearchHistorySortField](../models/semantic-search-history-sort-field.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | Used for `available.sorting.{sortBy,sortOrder}` and<br/>`available.sortingMessages.{sortBy,sortOrder}`. The `applied` flag<br/>is present on `sorting.*` and absent on `sortingMessages.*`, so it<br/>is optional here.<br/> |