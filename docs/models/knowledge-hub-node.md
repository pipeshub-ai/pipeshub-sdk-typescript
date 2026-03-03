# KnowledgeHubNode

A node in the knowledge hub tree structure

## Example Usage

```typescript
import { KnowledgeHubNode } from "@pipeshub-ai/sdk/models";

let value: KnowledgeHubNode = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                                                                        | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `name`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `type`                                                                      | [models.KnowledgeHubNodeType](../models/knowledge-hub-node-type.md)         | :heavy_minus_sign:                                                          | N/A                                                                         |
| `parentId`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `hasChildren`                                                               | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `childCount`                                                                | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `metadata`                                                                  | [models.KnowledgeHubNodeMetadata](../models/knowledge-hub-node-metadata.md) | :heavy_minus_sign:                                                          | N/A                                                                         |