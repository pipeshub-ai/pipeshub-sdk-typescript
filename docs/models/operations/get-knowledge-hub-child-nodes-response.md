# GetKnowledgeHubChildNodesResponse

## Example Usage

```typescript
import { GetKnowledgeHubChildNodesResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetKnowledgeHubChildNodesResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    maxFolderDepth: 946176,
    success: true,
    error: "<value>",
    id: "<id>",
    currentNode: null,
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
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.KnowledgeHubNodesResponse](../../models/knowledge-hub-nodes-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |