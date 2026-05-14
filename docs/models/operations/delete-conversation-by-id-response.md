# DeleteConversationByIdResponse

Conversation deleted successfully

## Example Usage

```typescript
import { DeleteConversationByIdResponse } from "@pipeshub-ai/sdk/models/operations";

let value: DeleteConversationByIdResponse = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Identifier of the conversation that was deleted                                                        |
| `status`                                                                                               | [operations.DeleteConversationByIdStatus](../../models/operations/delete-conversation-by-id-status.md) | :heavy_minus_sign:                                                                                     | Outcome of the operation                                                                               |
| `deletedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | Timestamp when the conversation was marked deleted                                                     |
| `deletedBy`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Identifier of the user who performed the delete                                                        |
| `citationsDeleted`                                                                                     | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Number of citations soft-deleted alongside the conversation                                            |
| `meta`                                                                                                 | [operations.DeleteConversationByIdMeta](../../models/operations/delete-conversation-by-id-meta.md)     | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |