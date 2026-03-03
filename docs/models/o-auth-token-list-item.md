# OAuthTokenListItem

Information about an issued token

## Example Usage

```typescript
import { OAuthTokenListItem } from "@pipeshub-ai/sdk/models";

let value: OAuthTokenListItem = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Token ID                                                                                      |
| `tokenType`                                                                                   | [models.TokenType](../models/token-type.md)                                                   | :heavy_minus_sign:                                                                            | Type of token                                                                                 |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | User ID (if user-based token)                                                                 |
| `scopes`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Granted scopes                                                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Token creation time                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Token expiration time                                                                         |
| `isRevoked`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether token has been revoked                                                                |