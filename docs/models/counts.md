# Counts

Present when `include=counts`; otherwise `null`.

## Example Usage

```typescript
import { Counts } from "@pipeshub-ai/sdk/models";

let value: Counts = {
  items: [
    {
      label: "<value>",
      count: 434157,
    },
  ],
  total: 409284,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `items`                            | [models.Item](../models/item.md)[] | :heavy_check_mark:                 | N/A                                |
| `total`                            | *number*                           | :heavy_check_mark:                 | N/A                                |