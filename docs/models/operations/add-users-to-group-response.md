# AddUsersToGroupResponse

Users added to group successfully

## Example Usage

```typescript
import { AddUsersToGroupResponse } from "@pipeshub-ai/sdk/models/operations";

let value: AddUsersToGroupResponse = {
  success: true,
  message: "2 users added to group successfully",
  addedCount: 2,
  skippedCount: 0,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `success`                            | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `message`                            | *string*                             | :heavy_minus_sign:                   | N/A                                  | 2 users added to group successfully  |
| `addedCount`                         | *number*                             | :heavy_minus_sign:                   | N/A                                  | 2                                    |
| `skippedCount`                       | *number*                             | :heavy_minus_sign:                   | Number of users already in the group | 0                                    |