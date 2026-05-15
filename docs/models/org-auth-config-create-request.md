# OrgAuthConfigCreateRequest

Request to create initial organization auth configuration

## Example Usage

```typescript
import { OrgAuthConfigCreateRequest } from "@pipeshub-ai/sdk/models";

let value: OrgAuthConfigCreateRequest = {
  contactEmail: "Gust.Hodkiewicz75@gmail.com",
  registeredName: "<value>",
  adminFullName: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `contactEmail`                | *string*                      | :heavy_check_mark:            | Organization contact email    |
| `registeredName`              | *string*                      | :heavy_check_mark:            | Organization registered name  |
| `adminFullName`               | *string*                      | :heavy_check_mark:            | Admin user full name          |
| `sendEmail`                   | *boolean*                     | :heavy_minus_sign:            | Whether to send welcome email |