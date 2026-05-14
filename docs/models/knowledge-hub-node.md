# KnowledgeHubNode

One element of `items`. The live API keeps keys stable and sets
inapplicable values to JSON `null` (not omitted).


## Example Usage

```typescript
import { KnowledgeHubNode } from "@pipeshub-ai/sdk/models";

let value: KnowledgeHubNode = {
  id: "<id>",
  name: "<value>",
  nodeType: "app",
  parentId: "<id>",
  origin: "CONNECTOR",
  connector: "<value>",
  recordType: "<value>",
  recordGroupType: "<value>",
  indexingStatus: null,
  reason: "<value>",
  isInternal: false,
  createdAt: 875676,
  updatedAt: 940085,
  sizeInBytes: 109382,
  mimeType: "<value>",
  extension: "pdf",
  webUrl: "https://crowded-markup.net/",
  hasChildren: false,
  previewRenderable: null,
  permission: {
    role: "<value>",
    canEdit: true,
    canDelete: false,
  },
  sharingStatus: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | Unique identifier for the node.                                                                    |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Display name of the node.                                                                          |
| `nodeType`                                                                                         | [models.NodeType](../models/node-type.md)                                                          | :heavy_check_mark:                                                                                 | Type of the node.                                                                                  |
| `parentId`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | Parent node ID, or `null` at the root browse level.                                                |
| `origin`                                                                                           | [models.Origin](../models/origin.md)                                                               | :heavy_check_mark:                                                                                 | Origin type.                                                                                       |
| `connector`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | Connector display name / key when applicable; otherwise `null`.                                    |
| `recordType`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | Record type when `nodeType` is `record`; otherwise `null`.                                         |
| `recordGroupType`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | Record group type when `nodeType` is `recordGroup`; otherwise `null`.                              |
| `indexingStatus`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | Indexing status when `nodeType` is `record`; otherwise `null`.                                     |
| `reason`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | Failure or status reason when set; otherwise `null`.                                               |
| `isInternal`                                                                                       | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | True for internal/system nodes that do not originate from a source.                                |
| `createdAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | Creation timestamp (epoch ms).                                                                     |
| `updatedAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | Update timestamp (epoch ms).                                                                       |
| `sizeInBytes`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | File size in bytes for file records; otherwise `null`.                                             |
| `mimeType`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `extension`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `webUrl`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `hasChildren`                                                                                      | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the node has children (sidebar / tree).                                                    |
| `previewRenderable`                                                                                | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `permission`                                                                                       | [models.Permission](../models/permission.md)                                                       | :heavy_check_mark:                                                                                 | Per-item permission when `include=permissions` is requested; otherwise `null`.                     |
| `sharingStatus`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | Sharing status (e.g. `private`, `shared`, `team`, `workspace`) when<br/>applicable; otherwise `null`.<br/> |