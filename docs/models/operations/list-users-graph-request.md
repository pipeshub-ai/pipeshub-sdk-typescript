# ListUsersGraphRequest

## Example Usage

```typescript
import { ListUsersGraphRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ListUsersGraphRequest = {
  search: "john",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `page`                                                                                       | *number*                                                                                     | :heavy_minus_sign:                                                                           | Page number (1-based)                                                                        |                                                                                              |
| `limit`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | Number of results per page                                                                   |                                                                                              |
| `search`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Search query (searches name and email)                                                       | john                                                                                         |
| `sortBy`                                                                                     | [operations.ListUsersGraphSortBy](../../models/operations/list-users-graph-sort-by.md)       | :heavy_minus_sign:                                                                           | Field to sort by                                                                             |                                                                                              |
| `sortOrder`                                                                                  | [operations.ListUsersGraphSortOrder](../../models/operations/list-users-graph-sort-order.md) | :heavy_minus_sign:                                                                           | Sort direction                                                                               |                                                                                              |