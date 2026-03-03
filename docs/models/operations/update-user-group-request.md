# UpdateUserGroupRequest

## Example Usage

```typescript
import { UpdateUserGroupRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateUserGroupRequest = {
  groupId: "507f1f77bcf86cd799439011",
  body: {
    name: "Engineering Team - Updated",
    description: "All engineering and DevOps members",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `groupId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | Unique identifier of the user group to update                                                      | 507f1f77bcf86cd799439011                                                                           |
| `body`                                                                                             | [operations.UpdateUserGroupRequestBody](../../models/operations/update-user-group-request-body.md) | :heavy_check_mark:                                                                                 | Request payload                                                                                    |                                                                                                    |