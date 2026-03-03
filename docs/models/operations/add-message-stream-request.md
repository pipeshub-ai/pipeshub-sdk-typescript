# AddMessageStreamRequest

## Example Usage

```typescript
import { AddMessageStreamRequest } from "@pipeshub-ai/sdk/models/operations";

let value: AddMessageStreamRequest = {
  conversationId: "<value>",
  body: {
    query: "Can you elaborate on the revenue trends?",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `conversationId`                                                | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `body`                                                          | [models.AddMessageRequest](../../models/add-message-request.md) | :heavy_check_mark:                                              | Request payload                                                 |