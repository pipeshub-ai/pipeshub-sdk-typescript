# OAuthTokenListItem

Information about an issued token (one element returned by `listTokensForApp`
in `oauth_token.service.ts`). `userId` is omitted for client-credentials access
tokens; all other fields are always populated.


## Example Usage

```typescript
import { OAuthTokenListItem } from "@pipeshub-ai/sdk/models";

let value: OAuthTokenListItem = {
  id: "<id>",
  tokenType: "access",
  scopes: [],
  createdAt: new Date("2024-08-18T06:07:53.464Z"),
  expiresAt: new Date("2026-08-18T23:38:59.127Z"),
  isRevoked: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Token ID                                                                                      |
| `tokenType`                                                                                   | [models.TokenType](../models/token-type.md)                                                   | :heavy_check_mark:                                                                            | Type of token                                                                                 |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | User ID (omitted for client-credentials access tokens)                                        |
| `scopes`                                                                                      | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Granted scopes                                                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Token creation time                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Token expiration time                                                                         |
| `isRevoked`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether token has been revoked                                                                |