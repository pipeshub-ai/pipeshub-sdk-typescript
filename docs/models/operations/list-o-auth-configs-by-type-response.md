# ListOAuthConfigsByTypeResponse

Saved OAuth apps

## Example Usage

```typescript
import { ListOAuthConfigsByTypeResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ListOAuthConfigsByTypeResponse = {
  success: true,
  oauthConfigs: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `oauthConfigs`                                                     | [models.OAuthConfig](../../models/o-auth-config.md)[]              | :heavy_check_mark:                                                 | N/A                                                                |
| `pagination`                                                       | [models.ConnectorPagination](../../models/connector-pagination.md) | :heavy_minus_sign:                                                 | N/A                                                                |