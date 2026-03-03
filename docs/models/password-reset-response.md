# PasswordResetResponse

Response after successful password reset

## Example Usage

```typescript
import { PasswordResetResponse } from "@pipeshub-ai/sdk/models";

let value: PasswordResetResponse = {
  data: "password reset",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | password reset                                                      |
| `accessToken`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | New JWT access token (since password change invalidates old tokens) |                                                                     |