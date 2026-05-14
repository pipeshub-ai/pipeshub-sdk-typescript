# UpdatedAt

Date range filter with optional inclusive bounds (epoch ms).

## Example Usage

```typescript
import { UpdatedAt } from "@pipeshub-ai/sdk/models";

let value: UpdatedAt = {};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `gte`                                   | *number*                                | :heavy_minus_sign:                      | Greater-than-or-equal bound (epoch ms). |
| `lte`                                   | *number*                                | :heavy_minus_sign:                      | Less-than-or-equal bound (epoch ms).    |