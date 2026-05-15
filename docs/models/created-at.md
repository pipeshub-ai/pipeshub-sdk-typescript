# CreatedAt

Date range filter with optional inclusive bounds (epoch ms).

## Example Usage

```typescript
import { CreatedAt } from "@pipeshub-ai/sdk/models";

let value: CreatedAt = {};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `gte`                                   | *number*                                | :heavy_minus_sign:                      | Greater-than-or-equal bound (epoch ms). |
| `lte`                                   | *number*                                | :heavy_minus_sign:                      | Less-than-or-equal bound (epoch ms).    |