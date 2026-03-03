# RemoveUsersFromGroupRequest

Request payload

## Example Usage

```typescript
import { RemoveUsersFromGroupRequest } from "@pipeshub-ai/sdk/models/operations";

let value: RemoveUsersFromGroupRequest = {
  groupId: "507f1f77bcf86cd799439011",
  userIds: [
    "507f1f77bcf86cd799439012",
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `groupId`                                  | *string*                                   | :heavy_check_mark:                         | ID of the group to remove users from       | 507f1f77bcf86cd799439011                   |
| `userIds`                                  | *string*[]                                 | :heavy_check_mark:                         | Array of user IDs to remove from the group | [<br/>"507f1f77bcf86cd799439012"<br/>]     |