# ParentNode

Parent of `currentNode` when present; `null` when not applicable,
and for a connected app whose limit leaves that parent out. For
such an app, `breadcrumbs` likewise names only the nodes inside
its limit.


## Example Usage

```typescript
import { ParentNode } from "@pipeshub-ai/sdk/models";

let value: ParentNode = {
  id: "<id>",
  name: "<value>",
  nodeType: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `name`                                           | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `nodeType`                                       | *string*                                         | :heavy_check_mark:                               | One of `app`, `recordGroup`, `folder`, `record`. |
| `subType`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |