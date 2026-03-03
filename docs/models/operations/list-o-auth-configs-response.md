# ListOAuthConfigsResponse

OAuth configurations retrieved

## Example Usage

```typescript
import { ListOAuthConfigsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ListOAuthConfigsResponse = {
  oauthConfigs: [
    {
      oauthInstanceName: "Production Google OAuth",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `oauthConfigs`                                                     | [models.OAuthConfig](../../models/o-auth-config.md)[]              | :heavy_minus_sign:                                                 | N/A                                                                |
| `pagination`                                                       | [models.ConnectorPagination](../../models/connector-pagination.md) | :heavy_minus_sign:                                                 | Pagination information for connector lists                         |