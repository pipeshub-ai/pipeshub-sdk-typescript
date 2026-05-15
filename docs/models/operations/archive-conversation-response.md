# ArchiveConversationResponse

Conversation archived successfully

## Example Usage

```typescript
import { ArchiveConversationResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ArchiveConversationResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | Conversation identifier                                                                        |
| `status`                                                                                       | [operations.ArchiveConversationStatus](../../models/operations/archive-conversation-status.md) | :heavy_minus_sign:                                                                             | New archive status of the conversation                                                         |
| `archivedBy`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | User who archived the conversation                                                             |
| `archivedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | Timestamp when the conversation was archived                                                   |
| `meta`                                                                                         | [operations.ArchiveConversationMeta](../../models/operations/archive-conversation-meta.md)     | :heavy_minus_sign:                                                                             | N/A                                                                                            |