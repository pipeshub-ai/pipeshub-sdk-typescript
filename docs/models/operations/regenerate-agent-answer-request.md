# RegenerateAgentAnswerRequest

## Example Usage

```typescript
import { RegenerateAgentAnswerRequest } from "@pipeshub-ai/sdk/models/operations";

let value: RegenerateAgentAnswerRequest = {
  agentKey: "<value>",
  conversationId: "<value>",
  messageId: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `agentKey`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `conversationId`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `messageId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `body`                                                                                                         | [operations.RegenerateAgentAnswerRequestBody](../../models/operations/regenerate-agent-answer-request-body.md) | :heavy_minus_sign:                                                                                             | Request payload                                                                                                |