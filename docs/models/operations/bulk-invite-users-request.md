# BulkInviteUsersRequest

Request payload

## Example Usage

```typescript
import { BulkInviteUsersRequest } from "@pipeshub-ai/sdk/models/operations";

let value: BulkInviteUsersRequest = {
  emails: [
    "user1@company.com",
    "user2@company.com",
  ],
  groupIds: [
    "507f1f77bcf86cd799439011",
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `emails`                                       | *string*[]                                     | :heavy_check_mark:                             | Array of email addresses to invite (max 100)   | [<br/>"user1@company.com",<br/>"user2@company.com"<br/>] |
| `groupIds`                                     | *string*[]                                     | :heavy_minus_sign:                             | Optional group IDs to add all invited users to | [<br/>"507f1f77bcf86cd799439011"<br/>]         |
| `sendEmail`                                    | *boolean*                                      | :heavy_minus_sign:                             | Whether to send invitation emails immediately  |                                                |