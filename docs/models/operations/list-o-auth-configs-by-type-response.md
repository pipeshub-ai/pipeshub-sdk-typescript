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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `success`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `oauthConfigs`                                                               | [models.OAuthConfigRecord](../../models/o-auth-config-record.md)[]           | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [models.OAuthRegistryPagination](../../models/o-auth-registry-pagination.md) | :heavy_minus_sign:                                                           | Pagination block of `GET /oauth/registry` and `GET /oauth/{connectorType}`   |