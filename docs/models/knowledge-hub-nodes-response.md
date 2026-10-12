# KnowledgeHubNodesResponse

Response body for the Knowledge Hub nodes API. The deployed service
serialises optional values as JSON `null` and always includes the keys
listed in `required` (Swagger / clients will see stable shapes, not
omitted properties).


## Example Usage

```typescript
import { KnowledgeHubNodesResponse } from "@pipeshub-ai/sdk/models";

let value: KnowledgeHubNodesResponse = {
  success: true,
  error: "<value>",
  id: null,
  currentNode: {
    id: "<id>",
    name: "<value>",
    nodeType: "<value>",
  },
  parentNode: {
    id: "<id>",
    name: "<value>",
    nodeType: "<value>",
  },
  items: [
    {
      id: "<id>",
      name: "<value>",
      nodeType: "recordGroup",
      parentId: "<id>",
      origin: "CONNECTOR",
      connector: "<value>",
      connectorId: null,
      recordType: "<value>",
      recordGroupType: null,
      indexingStatus: "<value>",
      reason: "<value>",
      isInternal: false,
      isPlaceholder: false,
      createdAt: 88267,
      updatedAt: 777139,
      sizeInBytes: 12362,
      mimeType: "<value>",
      extension: "wav",
      webUrl: "https://separate-pillow.biz",
      hasChildren: false,
      previewRenderable: false,
      permission: {
        role: "<value>",
        canEdit: true,
        canDelete: true,
      },
      sharingStatus: "<value>",
    },
  ],
  pagination: {
    page: 167842,
    limit: 705510,
    totalItems: 476931,
    totalPages: 208529,
    hasNext: false,
    hasPrev: false,
  },
  filters: {
    applied: {
      q: "<value>",
      nodeTypes: [
        "<value 1>",
      ],
      recordTypes: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      origins: [
        "<value 1>",
      ],
      connectorIds: [
        "<value 1>",
        "<value 2>",
      ],
      indexingStatus: null,
      createdAt: {},
      updatedAt: {},
      size: {},
      sortBy: "<value>",
      sortOrder: "<value>",
    },
    available: {
      nodeTypes: [
        {
          id: "<id>",
          label: "<value>",
        },
      ],
      recordTypes: [],
      origins: [
        {
          id: "<id>",
          label: "<value>",
        },
      ],
      connectors: [
        {
          id: "<id>",
          label: "<value>",
        },
      ],
      indexingStatus: [
        {
          id: "<id>",
          label: "<value>",
        },
      ],
      sortBy: [
        {
          id: "<id>",
          label: "<value>",
        },
      ],
      sortOrder: [],
    },
  },
  breadcrumbs: [],
  counts: {
    items: [
      {
        label: "<value>",
        count: 434157,
      },
    ],
    total: 766076,
  },
  permissions: {
    role: "<value>",
    canUpload: true,
    canCreateFolders: true,
    canEdit: true,
    canDelete: false,
    canManagePermissions: true,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `success`                                                                                          | *true*                                                                                             | :heavy_check_mark:                                                                                 | Always `true` on HTTP 200. Failures use 4xx/5xx error envelopes, not this body shape.              |
| `error`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | Always `null` on HTTP 200.                                                                         |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | Current parent node ID when browsing children; `null` at root.                                     |
| `currentNode`                                                                                      | [models.CurrentNode](../models/current-node.md)                                                    | :heavy_check_mark:                                                                                 | Node being browsed when `parentId` is in the path; `null` at root.                                 |
| `parentNode`                                                                                       | [models.ParentNode](../models/parent-node.md)                                                      | :heavy_check_mark:                                                                                 | Parent of `currentNode` when present; `null` when not applicable.                                  |
| `items`                                                                                            | [models.KnowledgeHubNode](../models/knowledge-hub-node.md)[]                                       | :heavy_check_mark:                                                                                 | Page of nodes for the current browse or search.                                                    |
| `pagination`                                                                                       | [models.KnowledgeHubNodesResponsePagination](../models/knowledge-hub-nodes-response-pagination.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `filters`                                                                                          | [models.KnowledgeHubNodesResponseFilters](../models/knowledge-hub-nodes-response-filters.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `breadcrumbs`                                                                                      | [models.Breadcrumb](../models/breadcrumb.md)[]                                                     | :heavy_check_mark:                                                                                 | Present when `include=breadcrumbs`; otherwise `null`.                                              |
| `counts`                                                                                           | [models.Counts](../models/counts.md)                                                               | :heavy_check_mark:                                                                                 | Present when `include=counts`; otherwise `null`.                                                   |
| `permissions`                                                                                      | [models.Permissions](../models/permissions.md)                                                     | :heavy_check_mark:                                                                                 | Present when `include=permissions`; otherwise `null`.                                              |