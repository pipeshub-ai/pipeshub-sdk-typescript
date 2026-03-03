# OAuthIntrospectResponse

OAuth 2.0 Token Introspection Response (RFC 7662).
Contains token metadata if active, or just `active: false` if not.


## Example Usage

```typescript
import { OAuthIntrospectResponse } from "@pipeshub-ai/sdk/models";

let value: OAuthIntrospectResponse = {
  active: false,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `active`                                | *boolean*                               | :heavy_check_mark:                      | Whether the token is currently active   |
| `scope`                                 | *string*                                | :heavy_minus_sign:                      | Scopes granted to the token             |
| `clientId`                              | *string*                                | :heavy_minus_sign:                      | Client ID the token was issued to       |
| `username`                              | *string*                                | :heavy_minus_sign:                      | User identifier (if user-based token)   |
| `tokenType`                             | *string*                                | :heavy_minus_sign:                      | Token type                              |
| `exp`                                   | *number*                                | :heavy_minus_sign:                      | Token expiration timestamp (Unix epoch) |
| `iat`                                   | *number*                                | :heavy_minus_sign:                      | Token issuance timestamp (Unix epoch)   |
| `nbf`                                   | *number*                                | :heavy_minus_sign:                      | Token not-before timestamp (Unix epoch) |
| `userId`                                | *string*                                | :heavy_minus_sign:                      | User ID                                 |
| `aud`                                   | *string*                                | :heavy_minus_sign:                      | Audience (client ID)                    |
| `iss`                                   | *string*                                | :heavy_minus_sign:                      | Issuer URL                              |
| `jti`                                   | *string*                                | :heavy_minus_sign:                      | Unique token identifier                 |