# Pagination

## Example Usage

```typescript
import { Pagination } from "@pipeshub-ai/sdk/models";

let value: Pagination = {};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `page`                | *number*              | :heavy_minus_sign:    | Current page number   |
| `limit`               | *number*              | :heavy_minus_sign:    | Items per page        |
| `total`               | *number*              | :heavy_minus_sign:    | Total number of items |
| `totalPages`          | *number*              | :heavy_minus_sign:    | Total number of pages |