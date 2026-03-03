# ShareAgentRequest

## Example Usage

```typescript
import { ShareAgentRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ShareAgentRequest = {
  agentKey: "<value>",
  body: {
    userIds: [
      "507f1f77bcf86cd799439011",
    ],
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `agentKey`                                           | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `body`                                               | [models.ShareRequest](../../models/share-request.md) | :heavy_check_mark:                                   | Request body for Share agent                         |