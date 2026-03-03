# AddUsersToGroupRequest

Request payload

## Example Usage

```typescript
import { AddUsersToGroupRequest } from "@pipeshub-ai/sdk/models/operations";

let value: AddUsersToGroupRequest = {
  groupId: "507f1f77bcf86cd799439011",
  userIds: [
    "507f1f77bcf86cd799439012",
    "507f1f77bcf86cd799439013",
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `groupId`                                                  | *string*                                                   | :heavy_check_mark:                                         | ID of the group to add users to                            | 507f1f77bcf86cd799439011                                   |
| `userIds`                                                  | *string*[]                                                 | :heavy_check_mark:                                         | Array of user IDs to add to the group                      | [<br/>"507f1f77bcf86cd799439012",<br/>"507f1f77bcf86cd799439013"<br/>] |