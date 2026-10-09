# CreateAgentConversationResponse

## Example Usage

```typescript
import { CreateAgentConversationResponse } from "@pipeshub-ai/sdk/models/operations";

let value: CreateAgentConversationResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    conversation: {},
    meta: {
      timestamp: new Date("2026-09-25T15:43:56.503Z"),
      duration: 731315,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `headers`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [models.CreateAgentConversationResponse](../../models/create-agent-conversation-response.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |