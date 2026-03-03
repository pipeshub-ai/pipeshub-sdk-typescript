# ListOAuthAppsRequest

## Example Usage

```typescript
import { ListOAuthAppsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ListOAuthAppsRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `page`                                                                               | *number*                                                                             | :heavy_minus_sign:                                                                   | Page number                                                                          |
| `limit`                                                                              | *number*                                                                             | :heavy_minus_sign:                                                                   | Items per page                                                                       |
| `status`                                                                             | [operations.ListOAuthAppsStatus](../../models/operations/list-o-auth-apps-status.md) | :heavy_minus_sign:                                                                   | Filter by status                                                                     |
| `search`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Search by app name                                                                   |