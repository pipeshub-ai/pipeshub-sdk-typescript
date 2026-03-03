# DeleteUserResponse

User deleted successfully

## Example Usage

```typescript
import { DeleteUserResponse } from "@pipeshub-ai/sdk/models/operations";

let value: DeleteUserResponse = {
  success: true,
  message: "User deleted successfully",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `success`                                                         | *boolean*                                                         | :heavy_minus_sign:                                                | N/A                                                               | true                                                              |
| `message`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | User deleted successfully                                         |
| `deletedUser`                                                     | [operations.DeletedUser](../../models/operations/deleted-user.md) | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |