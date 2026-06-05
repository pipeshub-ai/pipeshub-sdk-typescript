# OAuthIntrospectRequest

OAuth 2.0 Token Introspection Request (RFC 7662).
Check if a token is active and get its metadata.


## Example Usage

```typescript
import { OAuthIntrospectRequest } from "@pipeshub-ai/sdk/models";

let value: OAuthIntrospectRequest = {
  token: "<value>",
  clientId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `token`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | The token to introspect                                                                              |
| `tokenTypeHint`                                                                                      | [models.OAuthIntrospectRequestTokenTypeHint](../models/o-auth-introspect-request-token-type-hint.md) | :heavy_minus_sign:                                                                                   | Hint about token type                                                                                |
| `clientId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Client ID                                                                                            |
| `clientSecret`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Client secret                                                                                        |