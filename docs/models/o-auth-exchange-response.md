# OAuthExchangeResponse

OAuth token response

## Example Usage

```typescript
import { OAuthExchangeResponse } from "@pipeshub-ai/sdk/models";

let value: OAuthExchangeResponse = {
  tokenType: "Bearer",
};
```

## Fields

| Field                   | Type                    | Required                | Description             | Example                 |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `accessToken`           | *string*                | :heavy_minus_sign:      | OAuth access token      |                         |
| `idToken`               | *string*                | :heavy_minus_sign:      | OAuth ID token (JWT)    |                         |
| `tokenType`             | *string*                | :heavy_minus_sign:      | N/A                     | Bearer                  |
| `expiresIn`             | *number*                | :heavy_minus_sign:      | Token expiry in seconds |                         |