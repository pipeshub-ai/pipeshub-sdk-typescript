# SemanticSearchHistoryPagination

Pagination block emitted by `buildPaginationMetadata` (utils.ts:417).
`totalPages` is `Math.ceil(totalCount / limit)`, so an empty result
has `totalPages: 0`, not `1`.


## Example Usage

```typescript
import { SemanticSearchHistoryPagination } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchHistoryPagination = {
  page: 422141,
  limit: 231653,
  totalCount: 38767,
  totalPages: 285785,
  hasNextPage: false,
  hasPrevPage: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `page`             | *number*           | :heavy_check_mark: | N/A                |
| `limit`            | *number*           | :heavy_check_mark: | N/A                |
| `totalCount`       | *number*           | :heavy_check_mark: | N/A                |
| `totalPages`       | *number*           | :heavy_check_mark: | N/A                |
| `hasNextPage`      | *boolean*          | :heavy_check_mark: | N/A                |
| `hasPrevPage`      | *boolean*          | :heavy_check_mark: | N/A                |