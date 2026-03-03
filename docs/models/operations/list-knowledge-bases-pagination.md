# ListKnowledgeBasesPagination

## Example Usage

```typescript
import { ListKnowledgeBasesPagination } from "@pipeshub-ai/sdk/models/operations";

let value: ListKnowledgeBasesPagination = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `page`                           | *number*                         | :heavy_minus_sign:               | Current page number              |
| `limit`                          | *number*                         | :heavy_minus_sign:               | Items per page                   |
| `totalCount`                     | *number*                         | :heavy_minus_sign:               | Total number of items            |
| `totalPages`                     | *number*                         | :heavy_minus_sign:               | Total number of pages            |
| `hasNext`                        | *boolean*                        | :heavy_minus_sign:               | Whether there is a next page     |
| `hasPrev`                        | *boolean*                        | :heavy_minus_sign:               | Whether there is a previous page |