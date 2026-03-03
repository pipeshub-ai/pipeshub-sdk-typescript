# RefreshTokenResponse

Response with new access token

## Example Usage

```typescript
import { RefreshTokenResponse } from "@pipeshub-ai/sdk/models";

let value: RefreshTokenResponse = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `user`                                      | [models.UserBasic](../models/user-basic.md) | :heavy_minus_sign:                          | Basic user information                      |
| `accessToken`                               | *string*                                    | :heavy_minus_sign:                          | New JWT access token (1 hour expiry)        |