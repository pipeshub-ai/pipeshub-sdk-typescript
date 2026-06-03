# DeleteAgentConversationChatAttachmentRequest

## Example Usage

```typescript
import { DeleteAgentConversationChatAttachmentRequest } from "@pipeshub-ai/sdk/models/operations";

let value: DeleteAgentConversationChatAttachmentRequest = {
  agentKey: "<value>",
  recordId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `agentKey`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | Agent key path parameter. Must be non-empty.                                   |
| `recordId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | Attachment record id (from the upload response). Must be non-blank after trim. |