# SetAgentConversationProjectRequestBody

## Example Usage

```typescript
import { SetAgentConversationProjectRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: SetAgentConversationProjectRequestBody = {
  projectId: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `projectId`                             | *string*                                | :heavy_check_mark:                      | Target project id, or `null` to unlink. |