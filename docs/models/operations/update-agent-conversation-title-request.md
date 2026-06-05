# UpdateAgentConversationTitleRequest

## Example Usage

```typescript
import { UpdateAgentConversationTitleRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateAgentConversationTitleRequest = {
  agentKey: "<value>",
  conversationId: "<value>",
  body: {
    title: "ABC News Follow-up",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `agentKey`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `conversationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `body`                                                                                         | [models.ConversationTitleUpdateRequest](../../models/conversation-title-update-request.md)     | :heavy_check_mark:                                                                             | New title for the agent conversation.<br/><br/>The server trims the provided string before saving it.<br/> |