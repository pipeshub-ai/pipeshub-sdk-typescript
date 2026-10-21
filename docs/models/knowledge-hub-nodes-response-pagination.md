# KnowledgeHubNodesResponsePagination

## Example Usage

```typescript
import { KnowledgeHubNodesResponsePagination } from "@pipeshub-ai/sdk/models";

let value: KnowledgeHubNodesResponsePagination = {
  page: 39782,
  limit: 123337,
  totalItems: 995791,
  totalPages: 210201,
  hasNext: true,
  hasPrev: true,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `page`                                                    | *number*                                                  | :heavy_check_mark:                                        | Current page (1-indexed).                                 |
| `limit`                                                   | *number*                                                  | :heavy_check_mark:                                        | Page size.                                                |
| `totalItems`                                              | *number*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `totalPages`                                              | *number*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `hasNext`                                                 | *boolean*                                                 | :heavy_check_mark:                                        | N/A                                                       |
| `hasPrev`                                                 | *boolean*                                                 | :heavy_check_mark:                                        | N/A                                                       |
| `nextCursor`                                              | *string*                                                  | :heavy_minus_sign:                                        | Cursor for the next page; null on the last page.          |
| `prevCursor`                                              | *string*                                                  | :heavy_minus_sign:                                        | Cursor for the previous page; null on the first page.     |
| `startIndex`                                              | *number*                                                  | :heavy_minus_sign:                                        | 1-based index of the first item on this page, when known. |
| `endIndex`                                                | *number*                                                  | :heavy_minus_sign:                                        | 1-based index of the last item on this page, when known.  |
| `currentPageItems`                                        | *number*                                                  | :heavy_minus_sign:                                        | Number of items on this page.                             |