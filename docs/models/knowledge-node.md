# KnowledgeNode

## Example Usage

```typescript
import { KnowledgeNode } from "@pipeshub-ai/sdk/models";

let value: KnowledgeNode = {
  id: "<id>",
  name: "<value>",
  nodeType: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `name`                               | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `nodeType`                           | *string*                             | :heavy_check_mark:                   | `recordGroup`, `folder` or `record`. |