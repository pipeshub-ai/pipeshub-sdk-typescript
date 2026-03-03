# StreamAgentConversationRequest

## Example Usage

```typescript
import { StreamAgentConversationRequest } from "@pipeshub-ai/sdk/models/operations";

let value: StreamAgentConversationRequest = {
  agentKey: "<value>",
  body: {
    query: "What are the key findings from our Q4 financial report?",
    recordIds: [
      "507f1f77bcf86cd799439011",
      "507f1f77bcf86cd799439012",
    ],
    modelKey: "gpt-4-turbo",
    modelName: "GPT-4 Turbo",
    chatMode: "balanced",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `agentKey`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `body`                                                                          | [models.CreateConversationRequest](../../models/create-conversation-request.md) | :heavy_check_mark:                                                              | Request body for Create agent conversation with streaming                       |