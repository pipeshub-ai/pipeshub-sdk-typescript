# AuthenticatedPasswordResetResponse

Response after authenticated user changes password (new access token issued)

## Example Usage

```typescript
import { AuthenticatedPasswordResetResponse } from "@pipeshub-ai/sdk/models";

let value: AuthenticatedPasswordResetResponse = {
  data: "password reset",
  accessToken: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `data`                                     | *string*                                   | :heavy_check_mark:                         | N/A                                        | password reset                             |
| `accessToken`                              | *string*                                   | :heavy_check_mark:                         | New JWT access token after password change |                                            |