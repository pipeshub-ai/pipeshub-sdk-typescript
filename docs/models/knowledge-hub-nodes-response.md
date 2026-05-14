# KnowledgeHubNodesResponse

Response body for the Knowledge Hub nodes API. The deployed service
serialises optional values as JSON `null` and always includes the keys
listed in `required` (Swagger / clients will see stable shapes, not
omitted properties).


## Example Usage

```typescript
import { KnowledgeHubNodesResponse } from "@pipeshub-ai/sdk/models";

let value: KnowledgeHubNodesResponse = {
  success: false,
  error: null,
  id: "<id>",
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
  items: [],
  pagination: {
    page: 714167,
    limit: 834106,
    totalItems: 649371,
    totalPages: 34717,
    hasNext: false,
    hasPrev: true,
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
  breadcrumbs: [
    {
      id: "<id>",
      name: "<value>",
      nodeType: "<value>",
    },
  ],
  counts: {
    items: [],
    total: 777139,
  },
  permissions: {
    role: "<value>",
    canUpload: true,
    canCreateFolders: false,
    canEdit: false,
    canDelete: true,
    canManagePermissions: false,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `success`                                                                                          | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Always `true` on HTTP 200. Failures use 4xx/5xx error envelopes, not this body shape.              |
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