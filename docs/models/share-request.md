# ShareRequest

Request to share a conversation or search with other users

## Example Usage

```typescript
import { ShareRequest } from "@pipeshub-ai/sdk/models";

let value: ShareRequest = {
  userIds: [
    "507f1f77bcf86cd799439011",
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `userIds`                                                                                                                                | *string*[]                                                                                                                               | :heavy_check_mark:                                                                                                                       | IDs of users to share with                                                                                                               | [<br/>"507f1f77bcf86cd799439011"<br/>]                                                                                                   |
| `accessLevel`                                                                                                                            | [models.ShareRequestAccessLevel](../models/share-request-access-level.md)                                                                | :heavy_minus_sign:                                                                                                                       | Permission level for shared users:<br/><ul><br/><li><code>read</code> - Can view only</li><br/><li><code>write</code> - Can add messages</li><br/></ul><br/> |                                                                                                                                          |