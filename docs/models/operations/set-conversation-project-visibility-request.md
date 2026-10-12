# SetConversationProjectVisibilityRequest

## Example Usage

```typescript
import { SetConversationProjectVisibilityRequest } from "@pipeshub-ai/sdk/models/operations";

let value: SetConversationProjectVisibilityRequest = {
  conversationId: "<value>",
  body: {
    visibility: "project",
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                                      | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Unique conversation identifier                                                                                                        |
| `body`                                                                                                                                | [operations.SetConversationProjectVisibilityRequestBody](../../models/operations/set-conversation-project-visibility-request-body.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |