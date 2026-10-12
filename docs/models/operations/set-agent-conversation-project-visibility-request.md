# SetAgentConversationProjectVisibilityRequest

## Example Usage

```typescript
import { SetAgentConversationProjectVisibilityRequest } from "@pipeshub-ai/sdk/models/operations";

let value: SetAgentConversationProjectVisibilityRequest = {
  agentKey: "<value>",
  conversationId: "<value>",
  body: {
    visibility: "private",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `agentKey`                                                                                                                                       | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `conversationId`                                                                                                                                 | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `body`                                                                                                                                           | [operations.SetAgentConversationProjectVisibilityRequestBody](../../models/operations/set-agent-conversation-project-visibility-request-body.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |