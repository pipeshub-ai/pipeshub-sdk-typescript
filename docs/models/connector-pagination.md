# ConnectorPagination

## Example Usage

```typescript
import { ConnectorPagination } from "@pipeshub-ai/sdk/models";

let value: ConnectorPagination = {
  page: 561496,
  limit: 558324,
  totalCount: 506716,
  totalPages: 57896,
  hasPrev: false,
  hasNext: false,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `page`                                   | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `limit`                                  | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `search`                                 | *string*                                 | :heavy_minus_sign:                       | The search term the list was filtered by |
| `totalCount`                             | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `totalPages`                             | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `hasPrev`                                | *boolean*                                | :heavy_check_mark:                       | N/A                                      |
| `hasNext`                                | *boolean*                                | :heavy_check_mark:                       | N/A                                      |
| `prevPage`                               | *number*                                 | :heavy_minus_sign:                       | N/A                                      |
| `nextPage`                               | *number*                                 | :heavy_minus_sign:                       | N/A                                      |