# AuthenticateFinalResponse

All authentication steps complete; JWT tokens returned

## Example Usage

```typescript
import { AuthenticateFinalResponse } from "@pipeshub-ai/sdk/models";

let value: AuthenticateFinalResponse = {
  message: "Fully authenticated",
  accessToken: "<value>",
  refreshToken: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `message`                         | *string*                          | :heavy_check_mark:                | Success message                   | Fully authenticated               |
| `accessToken`                     | *string*                          | :heavy_check_mark:                | JWT access token (1 hour expiry)  |                                   |
| `refreshToken`                    | *string*                          | :heavy_check_mark:                | JWT refresh token (7 days expiry) |                                   |