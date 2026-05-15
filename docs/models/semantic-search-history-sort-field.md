# SemanticSearchHistorySortField

Used for `available.sorting.{sortBy,sortOrder}` and
`available.sortingMessages.{sortBy,sortOrder}`. The `applied` flag
is present on `sorting.*` and absent on `sortingMessages.*`, so it
is optional here.


## Example Usage

```typescript
import { SemanticSearchHistorySortField } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchHistorySortField = {
  values: [
    "<value 1>",
    "<value 2>",
  ],
  default: "<value>",
  description: "whether midst veto debit faithfully",
  current: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `values`           | *string*[]         | :heavy_check_mark: | N/A                |
| `default`          | *string*           | :heavy_check_mark: | N/A                |
| `description`      | *string*           | :heavy_check_mark: | N/A                |
| `current`          | *string*           | :heavy_check_mark: | N/A                |
| `applied`          | *boolean*          | :heavy_minus_sign: | N/A                |