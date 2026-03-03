# ConnectorPagination

Pagination information for connector lists

## Example Usage

```typescript
import { ConnectorPagination } from "@pipeshub-ai/sdk/models";

let value: ConnectorPagination = {};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `page`                   | *number*                 | :heavy_minus_sign:       | Current page number      |
| `limit`                  | *number*                 | :heavy_minus_sign:       | Items per page           |
| `total`                  | *number*                 | :heavy_minus_sign:       | Total number of items    |
| `hasMore`                | *boolean*                | :heavy_minus_sign:       | Whether more pages exist |