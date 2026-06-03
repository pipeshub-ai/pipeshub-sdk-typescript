# OAuthTokenResponse

OAuth 2.0 Token Response (RFC 6749 Section 5.1).
Contains the access token and optional refresh/ID tokens.


## Example Usage

```typescript
import { OAuthTokenResponse } from "@pipeshub-ai/sdk/models";

let value: OAuthTokenResponse = {
  tokenType: "Bearer",
  expiresIn: 3600,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `accessToken`                                               | *string*                                                    | :heavy_minus_sign:                                          | The access token for API requests                           |                                                             |
| `tokenType`                                                 | *string*                                                    | :heavy_minus_sign:                                          | Token type (always "Bearer")                                | Bearer                                                      |
| `expiresIn`                                                 | *number*                                                    | :heavy_minus_sign:                                          | Access token lifetime in seconds                            | 3600                                                        |
| `refreshToken`                                              | *string*                                                    | :heavy_minus_sign:                                          | Refresh token for obtaining new access tokens               |                                                             |
| `scope`                                                     | *string*                                                    | :heavy_minus_sign:                                          | Granted scopes (may differ from requested)                  |                                                             |
| `idToken`                                                   | *string*                                                    | :heavy_minus_sign:                                          | OpenID Connect ID token (JWT) if openid scope was requested |                                                             |