# AdminListPersonalAccessTokensRequest

## Example Usage

```typescript
import { AdminListPersonalAccessTokensRequest } from "@pipeshub-ai/sdk/models/operations";

let value: AdminListPersonalAccessTokensRequest = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `page`                                                            | *number*                                                          | :heavy_minus_sign:                                                | Page number (defaults to `1` when omitted or empty)               |
| `limit`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Items per page (defaults to `100` when omitted or empty; max 100) |