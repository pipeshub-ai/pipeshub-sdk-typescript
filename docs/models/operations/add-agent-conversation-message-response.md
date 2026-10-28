# AddAgentConversationMessageResponse

## Example Usage

```typescript
import { AddAgentConversationMessageResponse } from "@pipeshub-ai/sdk/models/operations";

let value: AddAgentConversationMessageResponse = {
  headers: {},
  result: {
    conversation: {},
    recordsUsed: 274946,
    meta: {
      timestamp: new Date("2024-06-25T17:34:13.119Z"),
      duration: 866324,
      recordsUsed: 850686,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.AgentAddMessageResponse](../../models/agent-add-message-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |