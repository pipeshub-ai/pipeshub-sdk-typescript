# GetKnowledgeHubChildNodesRequest

## Example Usage

```typescript
import { GetKnowledgeHubChildNodesRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetKnowledgeHubChildNodesRequest = {
  parentType: "<value>",
  parentId: "<id>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `parentType`                                     | *string*                                         | :heavy_check_mark:                               | Type of parent node (KB, FOLDER, CONNECTOR, APP) |
| `parentId`                                       | *string*                                         | :heavy_check_mark:                               | ID of parent node                                |
| `page`                                           | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `limit`                                          | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `q`                                              | *string*                                         | :heavy_minus_sign:                               | Search query                                     |