# Size

Size range filter with optional inclusive bounds (bytes).

## Example Usage

```typescript
import { Size } from "@pipeshub-ai/sdk/models";

let value: Size = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `gte`                                | *number*                             | :heavy_minus_sign:                   | Greater-than-or-equal bound (bytes). |
| `lte`                                | *number*                             | :heavy_minus_sign:                   | Less-than-or-equal bound (bytes).    |