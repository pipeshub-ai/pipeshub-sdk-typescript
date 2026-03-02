# OpenIDConfiguration

OpenID Connect Discovery Response (RFC 8414).
Contains authorization server metadata.


## Example Usage

```typescript
import { OpenIDConfiguration } from "pipeshub/models";

let value: OpenIDConfiguration = {
  scopesSupported: [
    "openid",
    "profile",
    "email",
    "read:records",
    "write:records",
  ],
  responseTypesSupported: [
    "code",
  ],
  grantTypesSupported: [
    "authorization_code",
    "client_credentials",
    "refresh_token",
  ],
  tokenEndpointAuthMethodsSupported: [
    "client_secret_basic",
    "client_secret_post",
  ],
  subjectTypesSupported: [
    "public",
  ],
  idTokenSigningAlgValuesSupported: [
    "HS256",
    "RS256",
  ],
  claimsSupported: [
    "user_id",
    "iss",
    "aud",
    "exp",
    "iat",
    "email",
    "name",
  ],
  codeChallengeMethodsSupported: [
    "S256",
    "plain",
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `issuer`                                                          | *string*                                                          | :heavy_minus_sign:                                                | Authorization server issuer URL                                   |                                                                   |
| `authorizationEndpoint`                                           | *string*                                                          | :heavy_minus_sign:                                                | OAuth authorization endpoint                                      |                                                                   |
| `tokenEndpoint`                                                   | *string*                                                          | :heavy_minus_sign:                                                | OAuth token endpoint                                              |                                                                   |
| `userinfoEndpoint`                                                | *string*                                                          | :heavy_minus_sign:                                                | OpenID Connect UserInfo endpoint                                  |                                                                   |
| `revocationEndpoint`                                              | *string*                                                          | :heavy_minus_sign:                                                | Token revocation endpoint                                         |                                                                   |
| `introspectionEndpoint`                                           | *string*                                                          | :heavy_minus_sign:                                                | Token introspection endpoint                                      |                                                                   |
| `jwksUri`                                                         | *string*                                                          | :heavy_minus_sign:                                                | JSON Web Key Set endpoint                                         |                                                                   |
| `scopesSupported`                                                 | *string*[]                                                        | :heavy_minus_sign:                                                | Supported OAuth scopes                                            | [<br/>"openid",<br/>"profile",<br/>"email",<br/>"read:records",<br/>"write:records"<br/>] |
| `responseTypesSupported`                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Supported OAuth response types                                    | [<br/>"code"<br/>]                                                |
| `grantTypesSupported`                                             | *string*[]                                                        | :heavy_minus_sign:                                                | Supported grant types                                             | [<br/>"authorization_code",<br/>"client_credentials",<br/>"refresh_token"<br/>] |
| `tokenEndpointAuthMethodsSupported`                               | *string*[]                                                        | :heavy_minus_sign:                                                | Supported client authentication methods                           | [<br/>"client_secret_basic",<br/>"client_secret_post"<br/>]       |
| `subjectTypesSupported`                                           | *string*[]                                                        | :heavy_minus_sign:                                                | Supported subject identifier types                                | [<br/>"public"<br/>]                                              |
| `idTokenSigningAlgValuesSupported`                                | *string*[]                                                        | :heavy_minus_sign:                                                | Supported ID token signing algorithms                             | [<br/>"HS256",<br/>"RS256"<br/>]                                  |
| `claimsSupported`                                                 | *string*[]                                                        | :heavy_minus_sign:                                                | Supported claims in ID tokens/UserInfo                            | [<br/>"user_id",<br/>"iss",<br/>"aud",<br/>"exp",<br/>"iat",<br/>"email",<br/>"name"<br/>] |
| `codeChallengeMethodsSupported`                                   | *string*[]                                                        | :heavy_minus_sign:                                                | Supported PKCE code challenge methods                             | [<br/>"S256",<br/>"plain"<br/>]                                   |