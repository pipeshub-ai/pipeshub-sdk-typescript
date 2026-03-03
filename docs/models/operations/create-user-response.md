# CreateUserResponse

User created successfully

## Example Usage

```typescript
import { CreateUserResponse } from "@pipeshub-ai/sdk/models/operations";

let value: CreateUserResponse = {
  success: true,
  message: "User created successfully",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `success`                           | *boolean*                           | :heavy_minus_sign:                  | N/A                                 | true                                |
| `message`                           | *string*                            | :heavy_minus_sign:                  | N/A                                 | User created successfully           |
| `data`                              | [models.User](../../models/user.md) | :heavy_minus_sign:                  | User account in an organization     |                                     |
| `inviteSent`                        | *boolean*                           | :heavy_minus_sign:                  | Whether invitation email was sent   |                                     |