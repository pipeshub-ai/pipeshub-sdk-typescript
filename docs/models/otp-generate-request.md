# OtpGenerateRequest

Request to generate and send OTP

## Example Usage

```typescript
import { OtpGenerateRequest } from "@pipeshub-ai/sdk/models";

let value: OtpGenerateRequest = {
  email: "Eliane55@yahoo.com",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `email`                                       | *string*                                      | :heavy_check_mark:                            | Email address to send OTP to                  |
| `cfTurnstileResponse`                         | *string*                                      | :heavy_minus_sign:                            | Cloudflare Turnstile CAPTCHA token (optional) |