# GenericOAuthConfig

Generic OAuth 2.0 provider configuration

## Example Usage

```typescript
import { GenericOAuthConfig } from "pipeshub/models";

let value: GenericOAuthConfig = {
  providerName: "Custom OAuth Provider",
  scope: "openid profile email",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `providerName`                      | *string*                            | :heavy_minus_sign:                  | Display name for the OAuth provider | Custom OAuth Provider               |
| `clientId`                          | *string*                            | :heavy_minus_sign:                  | OAuth client ID                     |                                     |
| `clientSecret`                      | *string*                            | :heavy_minus_sign:                  | OAuth client secret                 |                                     |
| `authorizationUrl`                  | *string*                            | :heavy_minus_sign:                  | Authorization endpoint URL          |                                     |
| `tokenEndpoint`                     | *string*                            | :heavy_minus_sign:                  | Token endpoint URL                  |                                     |
| `userInfoEndpoint`                  | *string*                            | :heavy_minus_sign:                  | User info endpoint URL              |                                     |
| `scope`                             | *string*                            | :heavy_minus_sign:                  | OAuth scopes to request             | openid profile email                |
| `redirectUri`                       | *string*                            | :heavy_minus_sign:                  | OAuth redirect URI                  |                                     |