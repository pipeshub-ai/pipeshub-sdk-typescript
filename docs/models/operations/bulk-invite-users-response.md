# BulkInviteUsersResponse

Bulk invitation processed

## Example Usage

```typescript
import { BulkInviteUsersResponse } from "@pipeshub-ai/sdk/models/operations";

let value: BulkInviteUsersResponse = {
  success: true,
  message: "Bulk invitation completed",
  invited: 8,
  skipped: 1,
  failed: 1,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        | true                                                       |
| `message`                                                  | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | Bulk invitation completed                                  |
| `invited`                                                  | *number*                                                   | :heavy_minus_sign:                                         | Number of successful invitations sent                      | 8                                                          |
| `skipped`                                                  | *number*                                                   | :heavy_minus_sign:                                         | Number of existing users skipped                           | 1                                                          |
| `failed`                                                   | *number*                                                   | :heavy_minus_sign:                                         | Number of failed invitations                               | 1                                                          |
| `failures`                                                 | [operations.Failure](../../models/operations/failure.md)[] | :heavy_minus_sign:                                         | Details of failed invitations                              |                                                            |