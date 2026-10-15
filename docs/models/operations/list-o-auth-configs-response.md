# ListOAuthConfigsResponse

OAuth apps of every connector type

## Example Usage

```typescript
import { ListOAuthConfigsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ListOAuthConfigsResponse = {
  success: true,
  oauthConfigs: [
    {},
  ],
  pagination: {
    page: 126406,
    limit: 681988,
    totalItems: 606466,
    totalPages: 47520,
    hasPrev: true,
    hasNext: false,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `success`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `oauthConfigs`                                                           | [models.OAuthConfig](../../models/o-auth-config.md)[]                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [models.OAuthConfigPagination](../../models/o-auth-config-pagination.md) | :heavy_check_mark:                                                       | N/A                                                                      |