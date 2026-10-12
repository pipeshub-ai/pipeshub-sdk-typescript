# SetConversationProjectRequest

## Example Usage

```typescript
import { SetConversationProjectRequest } from "@pipeshub-ai/sdk/models/operations";

let value: SetConversationProjectRequest = {
  conversationId: "<value>",
  body: {
    projectId: "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Unique conversation identifier                                                                                   |
| `body`                                                                                                           | [operations.SetConversationProjectRequestBody](../../models/operations/set-conversation-project-request-body.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |