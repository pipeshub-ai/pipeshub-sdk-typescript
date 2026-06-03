# RefreshTokenResponse

Response with new access token

## Example Usage

```typescript
import { RefreshTokenResponse } from "@pipeshub-ai/sdk/models";

let value: RefreshTokenResponse = {
  user: {
    id: "<id>",
    orgId: "<id>",
    email: "Jermey_Ernser@yahoo.com",
    fullName: "Ms. Irene Stracke",
    hasLoggedIn: true,
    isDeleted: true,
    slug: "<value>",
    createdAt: "1735078330764",
    updatedAt: "1735655368737",
    v: 804583,
  },
  accessToken: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `user`                                                                              | [models.RefreshTokenUser](../models/refresh-token-user.md)                          | :heavy_check_mark:                                                                  | User record returned with a refreshed access token                                  |
| `accessToken`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | New JWT access token (24 hour default expiry, configurable via ACCESS_TOKEN_EXPIRY) |