# ConversationSharedBy

Present on conversations the caller received via share. Identifies the
conversation initiator (the only user who can share a chat).


## Example Usage

```typescript
import { ConversationSharedBy } from "@pipeshub-ai/sdk/models";

let value: ConversationSharedBy = {
  userId: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `userId`                                           | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Display name, falling back to email or the user id |