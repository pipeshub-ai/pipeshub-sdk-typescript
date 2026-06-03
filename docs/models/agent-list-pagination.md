# AgentListPagination

Pagination block returned by `GET /agents`.

## Example Usage

```typescript
import { AgentListPagination } from "@pipeshub-ai/sdk/models";

let value: AgentListPagination = {
  currentPage: 1,
  limit: 20,
  totalItems: 2,
  totalPages: 1,
  hasNext: false,
  hasPrev: false,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `currentPage`                                     | *number*                                          | :heavy_check_mark:                                | Current 1-based page number.                      | 1                                                 |
| `limit`                                           | *number*                                          | :heavy_check_mark:                                | Page size actually applied by the backend.        | 20                                                |
| `totalItems`                                      | *number*                                          | :heavy_check_mark:                                | Total number of matching agents across all pages. | 2                                                 |
| `totalPages`                                      | *number*                                          | :heavy_check_mark:                                | Total number of pages for the current query.      | 1                                                 |
| `hasNext`                                         | *boolean*                                         | :heavy_check_mark:                                | Whether a later page exists.                      | false                                             |
| `hasPrev`                                         | *boolean*                                         | :heavy_check_mark:                                | Whether an earlier page exists.                   | false                                             |