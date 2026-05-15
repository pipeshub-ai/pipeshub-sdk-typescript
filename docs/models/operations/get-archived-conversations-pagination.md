# GetArchivedConversationsPagination

## Example Usage

```typescript
import { GetArchivedConversationsPagination } from "@pipeshub-ai/sdk/models/operations";

let value: GetArchivedConversationsPagination = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `page`                                           | *number*                                         | :heavy_minus_sign:                               | Current page number                              |
| `limit`                                          | *number*                                         | :heavy_minus_sign:                               | Items per page                                   |
| `totalCount`                                     | *number*                                         | :heavy_minus_sign:                               | Total archived conversations matching the filter |
| `totalPages`                                     | *number*                                         | :heavy_minus_sign:                               | Total pages at the current limit                 |
| `hasNextPage`                                    | *boolean*                                        | :heavy_minus_sign:                               | Whether a next page exists                       |
| `hasPrevPage`                                    | *boolean*                                        | :heavy_minus_sign:                               | Whether a previous page exists                   |