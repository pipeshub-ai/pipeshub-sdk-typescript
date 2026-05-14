# Applied

Echo of applied filters; unused slots are JSON `null`.

## Example Usage

```typescript
import { Applied } from "@pipeshub-ai/sdk/models";

let value: Applied = {
  q: "<value>",
  nodeTypes: [
    "<value 1>",
  ],
  recordTypes: [],
  origins: [],
  connectorIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  indexingStatus: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  createdAt: {},
  updatedAt: {},
  size: {},
  sortBy: "<value>",
  sortOrder: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `q`                                              | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `nodeTypes`                                      | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `recordTypes`                                    | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `origins`                                        | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `connectorIds`                                   | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `indexingStatus`                                 | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `createdAt`                                      | [models.CreatedAt](../models/created-at.md)      | :heavy_check_mark:                               | N/A                                              |
| `updatedAt`                                      | [models.UpdatedAt](../models/updated-at.md)      | :heavy_check_mark:                               | N/A                                              |
| `size`                                           | [models.Size](../models/size.md)                 | :heavy_check_mark:                               | N/A                                              |
| `sortBy`                                         | *string*                                         | :heavy_check_mark:                               | Effective sort field after server normalisation. |
| `sortOrder`                                      | *string*                                         | :heavy_check_mark:                               | Effective sort order after server normalisation. |