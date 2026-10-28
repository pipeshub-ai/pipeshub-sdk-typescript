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

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `page`                                                | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `limit`                                               | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `search`                                              | *string*                                              | :heavy_minus_sign:                                    | The search term the list was filtered by              |
| `totalCount`                                          | *number*                                              | :heavy_check_mark:                                    | Number of items matching the request across all pages |
| `totalPages`                                          | *number*                                              | :heavy_check_mark:                                    | Number of pages at the current `limit`                |
| `hasPrev`                                             | *boolean*                                             | :heavy_check_mark:                                    | Whether a page exists before this one                 |
| `hasNext`                                             | *boolean*                                             | :heavy_check_mark:                                    | Whether a page exists after this one                  |
| `prevPage`                                            | *number*                                              | :heavy_minus_sign:                                    | Previous page number, `null` on the first page        |
| `nextPage`                                            | *number*                                              | :heavy_minus_sign:                                    | Next page number, `null` on the last page             |