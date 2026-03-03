# UserRole

## Example Usage

```typescript
import { UserRole } from "@pipeshub-ai/sdk/models";

let value: UserRole = {
  userId: "<id>",
  role: "OWNER",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `userId`                                           | *string*                                           | :heavy_check_mark:                                 | User's database key                                |
| `role`                                             | [models.UserRoleRole](../models/user-role-role.md) | :heavy_check_mark:                                 | User's role in the team                            |