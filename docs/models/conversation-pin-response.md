# ConversationPinResponse

## Example Usage

```typescript
import { ConversationPinResponse } from "@pipeshub-ai/sdk/models";

let value: ConversationPinResponse = {
  id: "<value>",
  isPinned: true,
  meta: {},
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | Conversation identifier                                                           |
| `isPinned`                                                                        | *boolean*                                                                         | :heavy_check_mark:                                                                | The conversation's pin state after the call.                                      |
| `meta`                                                                            | [models.ConversationPinResponseMeta](../models/conversation-pin-response-meta.md) | :heavy_check_mark:                                                                | N/A                                                                               |