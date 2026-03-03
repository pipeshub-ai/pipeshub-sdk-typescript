# ListUsersGraphResponse

Paginated list of users

## Example Usage

```typescript
import { ListUsersGraphResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ListUsersGraphResponse = {
  success: true,
  pagination: {
    page: 1,
    limit: 10,
    total: 156,
    totalPages: 16,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `success`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           | true                                                                                          |
| `data`                                                                                        | [models.User](../../models/user.md)[]                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `pagination`                                                                                  | [operations.ListUsersGraphPagination](../../models/operations/list-users-graph-pagination.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `total`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `page`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |