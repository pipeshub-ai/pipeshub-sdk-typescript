# UnarchiveConversationResponse

Conversation unarchived successfully

## Example Usage

```typescript
import { UnarchiveConversationResponse } from "@pipeshub-ai/sdk/models/operations";

let value: UnarchiveConversationResponse = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Conversation identifier                                                                            |
| `status`                                                                                           | [operations.UnarchiveConversationStatus](../../models/operations/unarchive-conversation-status.md) | :heavy_minus_sign:                                                                                 | New archive status of the conversation                                                             |
| `unarchivedBy`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | User who unarchived the conversation                                                               |
| `unarchivedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | Timestamp when the conversation was unarchived                                                     |
| `meta`                                                                                             | [operations.UnarchiveConversationMeta](../../models/operations/unarchive-conversation-meta.md)     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |