# OauthAuthorizeRequest

## Example Usage

```typescript
import { OauthAuthorizeRequest } from "@pipeshub-ai/sdk/models/operations";

let value: OauthAuthorizeRequest = {
  responseType: "code",
  clientId: "<id>",
  redirectUri: "https://blank-bowling.com",
  scope: "openid profile email read:records",
  state: "Alaska",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `responseType`                                                                     | [operations.ResponseType](../../models/operations/response-type.md)                | :heavy_check_mark:                                                                 | Must be "code" for authorization code grant                                        |                                                                                    |
| `clientId`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | OAuth app client ID                                                                |                                                                                    |
| `redirectUri`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | Callback URI (must match registered URI)                                           |                                                                                    |
| `scope`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | Space-separated list of requested scopes                                           | openid profile email read:records                                                  |
| `state`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | Random string for CSRF protection                                                  |                                                                                    |
| `codeChallenge`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | PKCE code challenge (base64url-encoded)                                            |                                                                                    |
| `codeChallengeMethod`                                                              | [operations.CodeChallengeMethod](../../models/operations/code-challenge-method.md) | :heavy_minus_sign:                                                                 | PKCE method (S256 recommended)                                                     |                                                                                    |
| `nonce`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | Nonce for ID token binding                                                         |                                                                                    |