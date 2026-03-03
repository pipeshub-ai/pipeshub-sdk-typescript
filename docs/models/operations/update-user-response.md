# UpdateUserResponse

User updated successfully

## Example Usage

```typescript
import { UpdateUserResponse } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateUserResponse = {
  success: true,
  message: "User updated successfully",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `success`                           | *boolean*                           | :heavy_minus_sign:                  | N/A                                 | true                                |
| `message`                           | *string*                            | :heavy_minus_sign:                  | N/A                                 | User updated successfully           |
| `data`                              | [models.User](../../models/user.md) | :heavy_minus_sign:                  | User account in an organization     |                                     |