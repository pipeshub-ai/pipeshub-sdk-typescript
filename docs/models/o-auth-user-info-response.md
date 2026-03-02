# OAuthUserInfoResponse

OpenID Connect UserInfo Response.
Contains claims about the authenticated user.


## Example Usage

```typescript
import { OAuthUserInfoResponse } from "pipeshub/models";

let value: OAuthUserInfoResponse = {
  userId: "<id>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `userId`                                   | *string*                                   | :heavy_check_mark:                         | User ID                                    |
| `name`                                     | *string*                                   | :heavy_minus_sign:                         | Full name                                  |
| `givenName`                                | *string*                                   | :heavy_minus_sign:                         | First name                                 |
| `familyName`                               | *string*                                   | :heavy_minus_sign:                         | Last name                                  |
| `email`                                    | *string*                                   | :heavy_minus_sign:                         | Email address                              |
| `emailVerified`                            | *boolean*                                  | :heavy_minus_sign:                         | Whether email has been verified            |
| `picture`                                  | *string*                                   | :heavy_minus_sign:                         | Profile picture URL                        |
| `updatedAt`                                | *number*                                   | :heavy_minus_sign:                         | Last profile update timestamp (Unix epoch) |