# ForgotPasswordRequest

Request to send password reset email

## Example Usage

```typescript
import { ForgotPasswordRequest } from "@pipeshub-ai/sdk/models";

let value: ForgotPasswordRequest = {
  email: "Davion.Moore@gmail.com",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `email`                                       | *string*                                      | :heavy_check_mark:                            | Email address to send reset link to           |
| `cfTurnstileResponse`                         | *string*                                      | :heavy_minus_sign:                            | Cloudflare Turnstile CAPTCHA token (optional) |