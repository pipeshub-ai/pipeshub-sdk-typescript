# OtpCredentials

Credentials for OTP authentication

## Example Usage

```typescript
import { OtpCredentials } from "@pipeshub-ai/sdk/models";

let value: OtpCredentials = {
  otp: "123456",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `otp`                     | *string*                  | :heavy_check_mark:        | 6-digit one-time password | 123456                    |