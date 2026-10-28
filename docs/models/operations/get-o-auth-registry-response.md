# GetOAuthRegistryResponse

OAuth connector types retrieved

## Example Usage

```typescript
import { GetOAuthRegistryResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetOAuthRegistryResponse = {
  success: true,
  connectors: [],
  pagination: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `success`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `connectors`                                                                 | [models.OAuthRegistryEntry](../../models/o-auth-registry-entry.md)[]         | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [models.OAuthRegistryPagination](../../models/o-auth-registry-pagination.md) | :heavy_check_mark:                                                           | Pagination block of `GET /oauth/registry` and `GET /oauth/{connectorType}`   |