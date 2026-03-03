# AddAgentMessageRequest

## Example Usage

```typescript
import { AddAgentMessageRequest } from "@pipeshub-ai/sdk/models/operations";

let value: AddAgentMessageRequest = {
  agentKey: "<value>",
  conversationId: "<value>",
  body: {
    query: "Can you elaborate on the revenue trends?",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `agentKey`                                                      | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `conversationId`                                                | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `body`                                                          | [models.AddMessageRequest](../../models/add-message-request.md) | :heavy_check_mark:                                              | Request payload                                                 |