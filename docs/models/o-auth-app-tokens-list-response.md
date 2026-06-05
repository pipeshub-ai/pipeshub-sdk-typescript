# OAuthAppTokensListResponse

Response body for `GET /oauth-clients/{appId}/tokens` (`listAppTokens`).


## Example Usage

```typescript
import { OAuthAppTokensListResponse } from "@pipeshub-ai/sdk/models";

let value: OAuthAppTokensListResponse = {
  tokens: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `tokens`                                                           | [models.OAuthTokenListItem](../models/o-auth-token-list-item.md)[] | :heavy_check_mark:                                                 | Active access and refresh tokens for the app                       |