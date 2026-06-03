# OAuthAppListResponsePagination

## Example Usage

```typescript
import { OAuthAppListResponsePagination } from "@pipeshub-ai/sdk/models";

let value: OAuthAppListResponsePagination = {
  page: 450422,
  limit: 322363,
  total: 407125,
  totalPages: 450415,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `page`                | *number*              | :heavy_check_mark:    | Current page number   |
| `limit`               | *number*              | :heavy_check_mark:    | Items per page        |
| `total`               | *number*              | :heavy_check_mark:    | Total number of items |
| `totalPages`          | *number*              | :heavy_check_mark:    | Total number of pages |