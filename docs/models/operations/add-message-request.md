# AddMessageRequest

## Example Usage

```typescript
import { AddMessageRequest } from "@pipeshub-ai/sdk/models/operations";

let value: AddMessageRequest = {
  conversationId: "<value>",
  body: {
    query: "Can you elaborate on the revenue trends?",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `conversationId`                                                | *string*                                                        | :heavy_check_mark:                                              | Unique conversation identifier                                  |
| `body`                                                          | [models.AddMessageRequest](../../models/add-message-request.md) | :heavy_check_mark:                                              | Request payload                                                 |