# KBPermission

## Example Usage

```typescript
import { KBPermission } from "pipeshub/models";

let value: KBPermission = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_minus_sign:                                         | Permission entry ID                                        |
| `userId`                                                   | *string*                                                   | :heavy_minus_sign:                                         | User ID                                                    |
| `email`                                                    | *string*                                                   | :heavy_minus_sign:                                         | User email                                                 |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | User display name                                          |
| `role`                                                     | [models.KBPermissionRole](../models/kb-permission-role.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `type`                                                     | [models.KBPermissionType](../models/kb-permission-type.md) | :heavy_minus_sign:                                         | Whether permission is for a user or team                   |
| `createdAtTimestamp`                                       | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `updatedAtTimestamp`                                       | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |