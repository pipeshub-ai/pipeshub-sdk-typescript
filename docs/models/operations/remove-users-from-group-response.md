# RemoveUsersFromGroupResponse

Users removed from group successfully

## Example Usage

```typescript
import { RemoveUsersFromGroupResponse } from "@pipeshub-ai/sdk/models/operations";

let value: RemoveUsersFromGroupResponse = {
  success: true,
  message: "1 user removed from group successfully",
  removedCount: 1,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `success`                              | *boolean*                              | :heavy_minus_sign:                     | N/A                                    | true                                   |
| `message`                              | *string*                               | :heavy_minus_sign:                     | N/A                                    | 1 user removed from group successfully |
| `removedCount`                         | *number*                               | :heavy_minus_sign:                     | N/A                                    | 1                                      |