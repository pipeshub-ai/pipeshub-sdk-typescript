# Values

Current value for each applied filter. Only keys
present in `filters` are populated; others are
omitted.


## Example Usage

```typescript
import { Values } from "@pipeshub-ai/sdk/models/operations";

let value: Values = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `search`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `shared`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `tags`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `minMessages`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `sortBy`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `sortOrder`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `startDate`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `endDate`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `messageType`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `page`                                                                     | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `dateRange`                                                                | [operations.ValuesDateRange](../../models/operations/values-date-range.md) | :heavy_minus_sign:                                                         | N/A                                                                        |