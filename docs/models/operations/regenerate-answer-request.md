# RegenerateAnswerRequest

## Example Usage

```typescript
import { RegenerateAnswerRequest } from "@pipeshub-ai/sdk/models/operations";

let value: RegenerateAnswerRequest = {
  conversationId: "<value>",
  messageId: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                    | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `messageId`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | ID of the message to regenerate response for                                                        |
| `body`                                                                                              | [operations.RegenerateAnswerRequestBody](../../models/operations/regenerate-answer-request-body.md) | :heavy_minus_sign:                                                                                  | Request payload                                                                                     |