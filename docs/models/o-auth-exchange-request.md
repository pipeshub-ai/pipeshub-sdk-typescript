# OAuthExchangeRequest

Request to exchange OAuth authorization code for tokens

## Example Usage

```typescript
import { OAuthExchangeRequest } from "@pipeshub-ai/sdk/models";

let value: OAuthExchangeRequest = {
  code: "<value>",
  email: "Sienna.Price@hotmail.com",
  provider: "<value>",
  redirectUri: "https://witty-pneumonia.name/",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `code`                                     | *string*                                   | :heavy_check_mark:                         | OAuth authorization code                   |
| `email`                                    | *string*                                   | :heavy_check_mark:                         | User email                                 |
| `provider`                                 | *string*                                   | :heavy_check_mark:                         | OAuth provider name                        |
| `redirectUri`                              | *string*                                   | :heavy_check_mark:                         | Redirect URI used in authorization request |