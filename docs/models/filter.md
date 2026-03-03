# Filter

## Example Usage

```typescript
import { Filter } from "@pipeshub-ai/sdk/models";

let value: Filter = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `key`                                                        | *string*                                                     | :heavy_minus_sign:                                           | Filter field key                                             |
| `label`                                                      | *string*                                                     | :heavy_minus_sign:                                           | Display label                                                |
| `type`                                                       | [models.FilterOptionsType](../models/filter-options-type.md) | :heavy_minus_sign:                                           | Filter input type                                            |
| `options`                                                    | [models.Option](../models/option.md)[]                       | :heavy_minus_sign:                                           | N/A                                                          |
| `dynamic`                                                    | *boolean*                                                    | :heavy_minus_sign:                                           | Whether options are loaded dynamically                       |