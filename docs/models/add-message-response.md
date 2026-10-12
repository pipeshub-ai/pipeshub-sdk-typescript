# AddMessageResponse

Envelope returned by `POST /conversations/{conversationId}/messages`.
Contains the updated conversation, the number of citation records used
to ground the AI response for this turn, and request metadata.


## Example Usage

```typescript
import { AddMessageResponse } from "@pipeshub-ai/sdk/models";

let value: AddMessageResponse = {
  conversation: {
    title: "Q4 Financial Report Discussion",
  },
  recordsUsed: 746807,
  meta: {
    timestamp: new Date("2024-01-14T20:18:19.034Z"),
    duration: 547674,
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `conversation`                                                                                                                                                           | [models.Conversation](../models/conversation.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                       | A conversation represents a chat session between a user and the AI.<br/>Conversations maintain context across multiple messages and can be<br/>shared, archived, and organized.<br/> |
| `recordsUsed`                                                                                                                                                            | *number*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | Number of citation records used to ground the AI response generated<br/>for this turn.<br/>                                                                              |
| `meta`                                                                                                                                                                   | [models.AddMessageResponseMeta](../models/add-message-response-meta.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |