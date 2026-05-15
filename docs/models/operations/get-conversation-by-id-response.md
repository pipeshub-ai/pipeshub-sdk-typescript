# GetConversationByIdResponse

Conversation with paginated messages, applied filter metadata, and request metadata

## Example Usage

```typescript
import { GetConversationByIdResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetConversationByIdResponse = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `conversation`                                                                                                                           | [operations.GetConversationByIdConversation](../../models/operations/get-conversation-by-id-conversation.md)                             | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `filters`                                                                                                                                | [operations.GetConversationByIdFilters](../../models/operations/get-conversation-by-id-filters.md)                                       | :heavy_minus_sign:                                                                                                                       | Summary of which filter/sort/pagination parameters were applied to this request, plus the catalog of options available on this endpoint. |
| `meta`                                                                                                                                   | [operations.GetConversationByIdMeta](../../models/operations/get-conversation-by-id-meta.md)                                             | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |