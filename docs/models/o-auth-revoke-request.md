# OAuthRevokeRequest

OAuth 2.0 Token Revocation Request (RFC 7009).
Revokes an access or refresh token.


## Example Usage

```typescript
import { OAuthRevokeRequest } from "@pipeshub-ai/sdk/models";

let value: OAuthRevokeRequest = {
  token: "<value>",
  clientId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `token`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | The token to revoke                                                                          |
| `tokenTypeHint`                                                                              | [models.OAuthRevokeRequestTokenTypeHint](../models/o-auth-revoke-request-token-type-hint.md) | :heavy_minus_sign:                                                                           | Hint about token type (optional, improves performance)                                       |
| `clientId`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | Client ID                                                                                    |
| `clientSecret`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | Client secret                                                                                |