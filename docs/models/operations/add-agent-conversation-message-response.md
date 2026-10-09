# AddAgentConversationMessageResponse

## Example Usage

```typescript
import { AddAgentConversationMessageResponse } from "@pipeshub-ai/sdk/models/operations";

let value: AddAgentConversationMessageResponse = {
  headers: {
    "key": [],
  },
  result: {
    conversation: {
      title: "Q4 Financial Report Discussion",
    },
    recordsUsed: 628106,
    meta: {
      timestamp: new Date("2024-01-14T20:18:19.034Z"),
      duration: 547674,
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `headers`                                                         | Record<string, *string*[]>                                        | :heavy_check_mark:                                                | N/A                                                               |
| `result`                                                          | [models.AddMessageResponse](../../models/add-message-response.md) | :heavy_check_mark:                                                | N/A                                                               |