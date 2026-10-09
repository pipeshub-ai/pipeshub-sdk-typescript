# SetConversationProjectRequestBody

## Example Usage

```typescript
import { SetConversationProjectRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: SetConversationProjectRequestBody = {
  projectId: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `projectId`                             | *string*                                | :heavy_check_mark:                      | Target project id, or `null` to unlink. |