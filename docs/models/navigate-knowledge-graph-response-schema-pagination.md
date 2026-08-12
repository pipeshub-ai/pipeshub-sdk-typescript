# NavigateKnowledgeGraphResponseSchemaPagination

Pagination envelope for a navigate listing.

## Example Usage

```typescript
import { NavigateKnowledgeGraphResponseSchemaPagination } from "@pipeshub-ai/sdk/models";

let value: NavigateKnowledgeGraphResponseSchemaPagination = {
  page: 730355,
  limit: 488807,
  total: 5167,
  hasNext: true,
  hasPrev: true,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `page`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `limit`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `total`                                                  | *number*                                                 | :heavy_check_mark:                                       | Total children of the current node, ignoring pagination. |
| `hasNext`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `hasPrev`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |