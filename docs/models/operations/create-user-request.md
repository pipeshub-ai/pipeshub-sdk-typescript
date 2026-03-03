# CreateUserRequest

Request payload

## Example Usage

```typescript
import { CreateUserRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateUserRequest = {
  fullName: "John Smith",
  email: "john.smith@company.com",
  mobile: "+15551234567",
  designation: "Software Engineer",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `fullName`                                   | *string*                                     | :heavy_check_mark:                           | User's full display name                     | John Smith                                   |
| `email`                                      | *string*                                     | :heavy_check_mark:                           | User's email address (must be unique)        | john.smith@company.com                       |
| `mobile`                                     | *string*                                     | :heavy_minus_sign:                           | Mobile phone number with country code        | +15551234567                                 |
| `designation`                                | *string*                                     | :heavy_minus_sign:                           | Job title or designation                     | Software Engineer                            |
| `sendInvite`                                 | *boolean*                                    | :heavy_minus_sign:                           | Whether to send invitation email immediately |                                              |