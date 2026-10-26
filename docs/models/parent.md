# Parent

The parent this node is listed under, with what a client needs to
open it and name it; `null` exactly when `parentId` is. It is the
node's placement parent: an ancestor the user cannot open is
replaced, never named.


## Example Usage

```typescript
import { Parent } from "@pipeshub-ai/sdk/models";

let value: Parent = {
  id: "<id>",
  nodeType: "recordGroup",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | Parent node ID.                                        |
| `nodeType`                                             | [models.ParentNodeType](../models/parent-node-type.md) | :heavy_check_mark:                                     | Parent node type; opened as `/nodes/{nodeType}/{id}`.  |
| `name`                                                 | *string*                                               | :heavy_minus_sign:                                     | Parent display name.                                   |