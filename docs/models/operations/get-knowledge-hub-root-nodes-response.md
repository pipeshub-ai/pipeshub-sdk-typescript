# GetKnowledgeHubRootNodesResponse

## Example Usage

```typescript
import { GetKnowledgeHubRootNodesResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetKnowledgeHubRootNodesResponse = {
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
    breadcrumbs: [
      {
        id: "<id>",
        name: "<value>",
        nodeType: "<value>",
      },
    ],
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
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.KnowledgeHubNodesResponse](../../models/knowledge-hub-nodes-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |