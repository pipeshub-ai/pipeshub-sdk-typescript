# SMTPConfig

SMTP email server configuration for sending system emails (invitations, notifications, password resets)

## Example Usage

```typescript
import { SMTPConfig } from "@pipeshub-ai/sdk/models";

let value: SMTPConfig = {
  host: "smtp.gmail.com",
  port: 587,
  username: "notifications@yourcompany.com",
  password: "your-app-password",
  fromEmail: "noreply@yourcompany.com",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `host`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | SMTP server hostname or IP address                                                                                      | smtp.gmail.com                                                                                                          |
| `port`                                                                                                                  | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | SMTP server port. Common ports are 25 (unencrypted), 465 (SSL), 587 (TLS/STARTTLS)                                      | 587                                                                                                                     |
| `username`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | SMTP authentication username. Usually an email address for services like Gmail, SendGrid, etc.                          | notifications@yourcompany.com                                                                                           |
| `password`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | SMTP authentication password or app-specific password. For Gmail, use an App Password instead of your account password. | your-app-password                                                                                                       |
| `fromEmail`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | Default sender email address that appears in the "From" field of outgoing emails                                        | noreply@yourcompany.com                                                                                                 |