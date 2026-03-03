# ResendUserInviteResponse

Invitation resent successfully

## Example Usage

```typescript
import { ResendUserInviteResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ResendUserInviteResponse = {
  success: true,
  message: "Invitation resent successfully",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `success`                                | *boolean*                                | :heavy_minus_sign:                       | N/A                                      | true                                     |
| `message`                                | *string*                                 | :heavy_minus_sign:                       | N/A                                      | Invitation resent successfully           |
| `sentTo`                                 | *string*                                 | :heavy_minus_sign:                       | Email address the invitation was sent to |                                          |