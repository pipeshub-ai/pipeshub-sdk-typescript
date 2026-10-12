# SetAgentConversationProjectRequest

## Example Usage

```typescript
import { SetAgentConversationProjectRequest } from "@pipeshub-ai/sdk/models/operations";

let value: SetAgentConversationProjectRequest = {
  agentKey: "<value>",
  conversationId: "<value>",
  body: {
    projectId: "<value>",
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `agentKey`                                                                                                                  | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `conversationId`                                                                                                            | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `body`                                                                                                                      | [operations.SetAgentConversationProjectRequestBody](../../models/operations/set-agent-conversation-project-request-body.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |