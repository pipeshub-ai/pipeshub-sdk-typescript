# KnowledgeHubNodesResponse

Response body for the Knowledge Hub nodes API. The deployed service
serialises optional values as JSON `null` and always includes the keys
listed in `required` (Swagger / clients will see stable shapes, not
omitted properties).


## Example Usage

```typescript
import { KnowledgeHubNodesResponse } from "@pipeshub-ai/sdk/models";

let value: KnowledgeHubNodesResponse = {
  maxFolderDepth: 957560,
  success: true,
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
    page: 834106,
    limit: 649371,
    totalItems: 34717,
    totalPages: 7526,
    hasNext: true,
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
    items: [],
    total: 12362,
  },
  permissions: {
    role: "<value>",
    canUpload: false,
    canCreateFolders: true,
    canEdit: false,
    canDelete: false,
    canManagePermissions: false,
  },
};
```

## Fields

| Field                                                                                                                                                                                                         | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxFolderDepth`                                                                                                                                                                                              | *number*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | Deepest a collection folder may be nested; a folder directly in the collection is depth 1.                                                                                                                    |
| `success`                                                                                                                                                                                                     | *true*                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                            | Always `true` on HTTP 200. Failures use 4xx/5xx error envelopes, not this body shape.                                                                                                                         |
| `error`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | Always `null` on HTTP 200.                                                                                                                                                                                    |
| `errorCode`                                                                                                                                                                                                   | *number*                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                            | Status the connector service turns a failed lookup into. Always `null` on HTTP 200:<br/>a failure is answered with that status and the error envelope instead of this body.<br/>                              |
| `typedRecords`                                                                                                                                                                                                | Record<string, [models.SemanticSearchGraphRecord](../models/semantic-search-graph-record.md)>                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                            | Full record documents keyed by record ID. Filled only for in-process callers<br/>(the agent's knowledge navigator); always `null` over HTTP.<br/>                                                             |
| `id`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | Current parent node ID when browsing children; `null` at root.                                                                                                                                                |
| `currentNode`                                                                                                                                                                                                 | [models.CurrentNode](../models/current-node.md)                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                            | Node being browsed when `parentId` is in the path; `null` at root.                                                                                                                                            |
| `parentNode`                                                                                                                                                                                                  | [models.ParentNode](../models/parent-node.md)                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                            | Parent of `currentNode` when present; `null` when not applicable,<br/>and for a connected app whose limit leaves that parent out. For<br/>such an app, `breadcrumbs` likewise names only the nodes inside<br/>its limit.<br/> |
| `items`                                                                                                                                                                                                       | [models.KnowledgeHubNode](../models/knowledge-hub-node.md)[]                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                            | Page of nodes for the current browse or search.                                                                                                                                                               |
| `pagination`                                                                                                                                                                                                  | [models.KnowledgeHubNodesResponsePagination](../models/knowledge-hub-nodes-response-pagination.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                                                            | N/A                                                                                                                                                                                                           |
| `filters`                                                                                                                                                                                                     | [models.KnowledgeHubNodesResponseFilters](../models/knowledge-hub-nodes-response-filters.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                            | N/A                                                                                                                                                                                                           |
| `breadcrumbs`                                                                                                                                                                                                 | [models.Breadcrumb](../models/breadcrumb.md)[]                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                            | Present when `include=breadcrumbs`; otherwise `null`.                                                                                                                                                         |
| `counts`                                                                                                                                                                                                      | [models.Counts](../models/counts.md)                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                            | Present when `include=counts`; otherwise `null`.                                                                                                                                                              |
| `permissions`                                                                                                                                                                                                 | [models.Permissions](../models/permissions.md)                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                            | Present when `include=permissions`; otherwise `null`.                                                                                                                                                         |