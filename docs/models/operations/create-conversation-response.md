# CreateConversationResponse

## Example Usage

```typescript
import { CreateConversationResponse } from "@pipeshub-ai/sdk/models/operations";

let value: CreateConversationResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    conversation: {
      title: "Q4 Financial Report Discussion",
    },
    meta: {
      timestamp: new Date("2026-03-31T22:23:04.825Z"),
      duration: 313433,
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `result`                                                                          | [models.CreateConversationResponse](../../models/create-conversation-response.md) | :heavy_check_mark:                                                                | N/A                                                                               |