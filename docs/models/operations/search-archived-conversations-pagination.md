# SearchArchivedConversationsPagination

## Example Usage

```typescript
import { SearchArchivedConversationsPagination } from "@pipeshub-ai/sdk/models/operations";

let value: SearchArchivedConversationsPagination = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `page`                                            | *number*                                          | :heavy_minus_sign:                                | Current page number                               |
| `limit`                                           | *number*                                          | :heavy_minus_sign:                                | Items per page                                    |
| `totalCount`                                      | *number*                                          | :heavy_minus_sign:                                | Total matches across assistant and agent archives |
| `totalPages`                                      | *number*                                          | :heavy_minus_sign:                                | Total pages at the current limit                  |
| `hasNextPage`                                     | *boolean*                                         | :heavy_minus_sign:                                | Whether a next page exists                        |
| `hasPrevPage`                                     | *boolean*                                         | :heavy_minus_sign:                                | Whether a previous page exists                    |