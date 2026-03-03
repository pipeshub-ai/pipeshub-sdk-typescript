# OAuthConsentRequest

Request to submit user consent for OAuth authorization

## Example Usage

```typescript
import { OAuthConsentRequest } from "@pipeshub-ai/sdk/models";

let value: OAuthConsentRequest = {
  clientId: "<id>",
  redirectUri: "https://immaculate-promise.info",
  scope: "<value>",
  state: "Iowa",
  consent: "denied",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `clientId`                                                       | *string*                                                         | :heavy_check_mark:                                               | The OAuth app's client ID                                        |
| `redirectUri`                                                    | *string*                                                         | :heavy_check_mark:                                               | Redirect URI (must match authorization request)                  |
| `scope`                                                          | *string*                                                         | :heavy_check_mark:                                               | Requested scopes                                                 |
| `state`                                                          | *string*                                                         | :heavy_check_mark:                                               | State parameter from authorization request                       |
| `consent`                                                        | [models.Consent](../models/consent.md)                           | :heavy_check_mark:                                               | User's consent decision                                          |
| `codeChallenge`                                                  | *string*                                                         | :heavy_minus_sign:                                               | PKCE code challenge (if used in authorization request)           |
| `codeChallengeMethod`                                            | [models.CodeChallengeMethod](../models/code-challenge-method.md) | :heavy_minus_sign:                                               | PKCE challenge method                                            |