# Available

Populated when `include=availableFilters`; otherwise `null`.

## Example Usage

```typescript
import { Available } from "@pipeshub-ai/sdk/models";

let value: Available = {
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
  indexingStatus: [],
  sortBy: [],
  sortOrder: [],
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