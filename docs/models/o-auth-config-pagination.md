# OAuthConfigPagination

## Example Usage

```typescript
import { OAuthConfigPagination } from "@pipeshub-ai/sdk/models";

let value: OAuthConfigPagination = {
  page: 501425,
  limit: 799454,
  totalItems: 934652,
  totalPages: 697962,
  hasPrev: false,
  hasNext: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `page`             | *number*           | :heavy_check_mark: | N/A                |
| `limit`            | *number*           | :heavy_check_mark: | N/A                |
| `search`           | *string*           | :heavy_minus_sign: | N/A                |
| `totalItems`       | *number*           | :heavy_check_mark: | N/A                |
| `totalPages`       | *number*           | :heavy_check_mark: | N/A                |
| `hasPrev`          | *boolean*          | :heavy_check_mark: | N/A                |
| `hasNext`          | *boolean*          | :heavy_check_mark: | N/A                |