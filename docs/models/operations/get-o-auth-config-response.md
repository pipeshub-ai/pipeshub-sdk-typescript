# GetOAuthConfigResponse

Saved OAuth app

## Example Usage

```typescript
import { GetOAuthConfigResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetOAuthConfigResponse = {
  success: false,
  oauthConfig: {},
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `success`                                                                                                                                              | *boolean*                                                                                                                                              | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `oauthConfig`                                                                                                                                          | [models.OAuthConfig](../../models/o-auth-config.md)                                                                                                    | :heavy_check_mark:                                                                                                                                     | A saved OAuth app for a connector type. Admins also get `config` (secrets masked when HIDE_SECRET_CONFIG is on) and, in lists, the provider endpoints. |