# KnowledgeHubNodesResponseAvailable

Populated when `include=availableFilters`; otherwise `null`.

## Example Usage

```typescript
import { KnowledgeHubNodesResponseAvailable } from "@pipeshub-ai/sdk/models";

let value: KnowledgeHubNodesResponseAvailable = {
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
  connectors: [],
  indexingStatus: [],
  sortBy: [
    {
      id: "<id>",
      label: "<value>",
    },
  ],
  sortOrder: [
    {
      id: "<id>",
      label: "<value>",
    },
  ],
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `nodeTypes`                                         | [models.FilterOption](../models/filter-option.md)[] | :heavy_check_mark:                                  | N/A                                                 |
| `recordTypes`                                       | [models.FilterOption](../models/filter-option.md)[] | :heavy_check_mark:                                  | N/A                                                 |
| `origins`                                           | [models.FilterOption](../models/filter-option.md)[] | :heavy_check_mark:                                  | N/A                                                 |
| `connectors`                                        | [models.FilterOption](../models/filter-option.md)[] | :heavy_check_mark:                                  | N/A                                                 |
| `indexingStatus`                                    | [models.FilterOption](../models/filter-option.md)[] | :heavy_check_mark:                                  | N/A                                                 |
| `sortBy`                                            | [models.FilterOption](../models/filter-option.md)[] | :heavy_check_mark:                                  | N/A                                                 |
| `sortOrder`                                         | [models.FilterOption](../models/filter-option.md)[] | :heavy_check_mark:                                  | N/A                                                 |