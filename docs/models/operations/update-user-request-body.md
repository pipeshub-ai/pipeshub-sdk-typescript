# UpdateUserRequestBody

Request payload

## Example Usage

```typescript
import { UpdateUserRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateUserRequestBody = {
  fullName: "John Smith",
  firstName: "John",
  lastName: "Smith",
  email: "john.smith@company.com",
  mobile: "+15551234567",
  designation: "Senior Software Engineer",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `fullName`                                | *string*                                  | :heavy_minus_sign:                        | Full display name                         | John Smith                                |
| `firstName`                               | *string*                                  | :heavy_minus_sign:                        | First name only                           | John                                      |
| `lastName`                                | *string*                                  | :heavy_minus_sign:                        | Last name only                            | Smith                                     |
| `email`                                   | *string*                                  | :heavy_minus_sign:                        | Email address (admin only)                | john.smith@company.com                    |
| `mobile`                                  | *string*                                  | :heavy_minus_sign:                        | Mobile phone with country code            | +15551234567                              |
| `designation`                             | *string*                                  | :heavy_minus_sign:                        | Job title or role                         | Senior Software Engineer                  |
| `address`                                 | [models.Address](../../models/address.md) | :heavy_minus_sign:                        | N/A                                       |                                           |