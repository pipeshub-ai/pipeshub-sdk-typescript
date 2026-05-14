# AuthProviderOAuthPublicConfig

Public generic OAuth provider settings returned to clients

## Example Usage

```typescript
import { AuthProviderOAuthPublicConfig } from "@pipeshub-ai/sdk/models";

let value: AuthProviderOAuthPublicConfig = {
  providerName: "<value>",
  clientId: "<id>",
  tokenEndpoint: "<value>",
  authorizationUrl: "https://bouncy-cannon.net",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `providerName`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Custom OAuth provider display name                                  |
| `clientId`                                                          | *string*                                                            | :heavy_check_mark:                                                  | OAuth client ID                                                     |
| `tokenEndpoint`                                                     | *string*                                                            | :heavy_check_mark:                                                  | OAuth token endpoint URL                                            |
| `authorizationUrl`                                                  | *string*                                                            | :heavy_check_mark:                                                  | OAuth authorization URL                                             |
| `clientSecret`                                                      | *string*                                                            | :heavy_minus_sign:                                                  | Client secret (omitted when stripped for public responses)          |
| `userInfoEndpoint`                                                  | *string*                                                            | :heavy_minus_sign:                                                  | UserInfo endpoint URL                                               |
| `scope`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | Default OAuth scopes                                                |
| `enableJit`                                                         | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether just-in-time user provisioning is enabled for this provider |