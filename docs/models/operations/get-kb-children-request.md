# GetKBChildrenRequest

## Example Usage

```typescript
import { GetKBChildrenRequest } from "pipeshub/models/operations";

let value: GetKBChildrenRequest = {
  kbId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `kbId`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | Knowledge base ID                                                                          |
| `page`                                                                                     | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `limit`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `search`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | Search query for record names                                                              |
| `recordTypes`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | Filter by record types (comma-separated)                                                   |
| `origins`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | Filter by origin                                                                           |
| `indexingStatus`                                                                           | *string*                                                                                   | :heavy_minus_sign:                                                                         | Filter by indexing status                                                                  |
| `dateFrom`                                                                                 | *number*                                                                                   | :heavy_minus_sign:                                                                         | Start date filter (Unix timestamp)                                                         |
| `dateTo`                                                                                   | *number*                                                                                   | :heavy_minus_sign:                                                                         | End date filter (Unix timestamp)                                                           |
| `sortBy`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `sortOrder`                                                                                | [operations.GetKBChildrenSortOrder](../../models/operations/get-kb-children-sort-order.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |