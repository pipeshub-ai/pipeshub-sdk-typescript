# Quantity

In SI units of the dimension. `min` must not be after `max`.

## Example Usage

```typescript
import { Quantity } from "@pipeshub-ai/sdk/models";

let value: Quantity = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `min`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `max`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `dimension`                                                    | *string*                                                       | :heavy_minus_sign:                                             | For example `length`, `weight`, `speed`, `temperature`, `age`. |