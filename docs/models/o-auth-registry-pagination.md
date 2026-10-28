# OAuthRegistryPagination

Pagination block of `GET /oauth/registry` and `GET /oauth/{connectorType}`

## Example Usage

```typescript
import { OAuthRegistryPagination } from "@pipeshub-ai/sdk/models";

let value: OAuthRegistryPagination = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `page`                                          | *number*                                        | :heavy_minus_sign:                              | Current page number                             |
| `limit`                                         | *number*                                        | :heavy_minus_sign:                              | Items per page                                  |
| `search`                                        | *string*                                        | :heavy_minus_sign:                              | The search term that was applied, or null       |
| `totalCount`                                    | *number*                                        | :heavy_minus_sign:                              | Number of items that match                      |
| `totalPages`                                    | *number*                                        | :heavy_minus_sign:                              | N/A                                             |
| `hasPrev`                                       | *boolean*                                       | :heavy_minus_sign:                              | N/A                                             |
| `hasNext`                                       | *boolean*                                       | :heavy_minus_sign:                              | N/A                                             |
| `prevPage`                                      | *number*                                        | :heavy_minus_sign:                              | Previous page number, or null on the first page |
| `nextPage`                                      | *number*                                        | :heavy_minus_sign:                              | Next page number, or null on the last page      |