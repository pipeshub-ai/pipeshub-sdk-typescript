# CreateConversationResponse

Envelope returned by `POST /conversations/create`. Contains the
persisted conversation (including the initial user message and the AI
response) plus request metadata.


## Example Usage

```typescript
import { CreateConversationResponse } from "@pipeshub-ai/sdk/models";

let value: CreateConversationResponse = {
  conversation: {
    title: "Q4 Financial Report Discussion",
  },
  meta: {
    timestamp: new Date("2026-03-31T22:23:04.825Z"),
    duration: 313433,
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `conversation`                                                                                                                                                           | [models.Conversation](../models/conversation.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                       | A conversation represents a chat session between a user and the AI.<br/>Conversations maintain context across multiple messages and can be<br/>shared, archived, and organized.<br/> |
| `meta`                                                                                                                                                                   | [models.CreateConversationResponseMeta](../models/create-conversation-response-meta.md)                                                                                  | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |