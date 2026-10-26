# UpdateOAuthConfigResponse

OAuth configuration updated

## Example Usage

```typescript
import { UpdateOAuthConfigResponse } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateOAuthConfigResponse = {
  success: true,
  oauthConfig: {},
  message: "OAuth configuration updated successfully",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `success`                                                                                                                                              | *boolean*                                                                                                                                              | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `oauthConfig`                                                                                                                                          | [models.OAuthConfig](../../models/o-auth-config.md)                                                                                                    | :heavy_check_mark:                                                                                                                                     | A saved OAuth app for a connector type. Admins also get `config` (secrets masked when HIDE_SECRET_CONFIG is on) and, in lists, the provider endpoints. |                                                                                                                                                        |
| `message`                                                                                                                                              | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    | OAuth configuration updated successfully                                                                                                               |