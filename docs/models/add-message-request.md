# AddMessageRequest

Request body for adding a message to an existing conversation

## Example Usage

```typescript
import { AddMessageRequest } from "@pipeshub-ai/sdk/models";

let value: AddMessageRequest = {
  query: "Can you elaborate on the revenue trends?",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `query`                                      | *string*                                     | :heavy_check_mark:                           | The follow-up question or message content    | Can you elaborate on the revenue trends?     |
| `filters`                                    | [models.Filters](../models/filters.md)       | :heavy_minus_sign:                           | N/A                                          |                                              |
| `modelKey`                                   | *string*                                     | :heavy_minus_sign:                           | Override the model for this specific message |                                              |
| `modelName`                                  | *string*                                     | :heavy_minus_sign:                           | Display name of the model                    |                                              |
| `chatMode`                                   | *string*                                     | :heavy_minus_sign:                           | Chat mode for this message                   |                                              |