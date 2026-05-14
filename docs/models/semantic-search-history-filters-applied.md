# SemanticSearchHistoryFiltersApplied

Echo of which filters the caller actually supplied, built by
`buildFiltersMetadata` (utils.ts:430-486). `page` and `limit` always
appear because they are normalised to defaults before being recorded,
so `filters` is never empty and `values` always contains at least
`{ page, limit }`. Other keys appear only when the matching query
param was non-empty (or, for `dateRange`, when `createdAt` was set
on the Mongo filter).

`values` keys are scalar strings rather than typed primitives
(`'true'`/`'false'`, `'5'`, etc.) because they are passed through
from `req.query` as Express parsed them — only `page` and `limit`
are coerced to integers via `safeParsePagination`.


## Example Usage

```typescript
import { SemanticSearchHistoryFiltersApplied } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchHistoryFiltersApplied = {
  filters: [
    "search",
  ],
  values: {},
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `filters`                              | [models.Filter](../models/filter.md)[] | :heavy_check_mark:                     | N/A                                    |
| `values`                               | [models.Values](../models/values.md)   | :heavy_check_mark:                     | N/A                                    |