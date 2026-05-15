# Breadcrumb

## Example Usage

```typescript
import { Breadcrumb } from "@pipeshub-ai/sdk/models";

let value: Breadcrumb = {
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