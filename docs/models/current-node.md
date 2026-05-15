# CurrentNode

Node being browsed when `parentId` is in the path; `null` at root.

## Example Usage

```typescript
import { CurrentNode } from "@pipeshub-ai/sdk/models";

let value: CurrentNode = {
  id: "<id>",
  name: "<value>",
  nodeType: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `nodeType`                                                       | *string*                                                         | :heavy_check_mark:                                               | One of `app`, `recordGroup`, `folder`, `record`.                 |
| `subType`                                                        | *string*                                                         | :heavy_minus_sign:                                               | Connector name or record type when applicable; otherwise `null`. |