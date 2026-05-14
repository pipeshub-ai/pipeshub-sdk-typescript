# KnowledgeHubNodesResponseFilters

## Example Usage

```typescript
import { KnowledgeHubNodesResponseFilters } from "@pipeshub-ai/sdk/models";

let value: KnowledgeHubNodesResponseFilters = {
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
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `applied`                                                    | [models.Applied](../models/applied.md)                       | :heavy_check_mark:                                           | Echo of applied filters; unused slots are JSON `null`.       |
| `available`                                                  | [models.Available](../models/available.md)                   | :heavy_check_mark:                                           | Populated when `include=availableFilters`; otherwise `null`. |