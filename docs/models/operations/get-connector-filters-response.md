# GetConnectorFiltersResponse

Filter options retrieved

## Example Usage

```typescript
import { GetConnectorFiltersResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorFiltersResponse = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `success`                                              | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |
| `filterOptions`                                        | [models.FilterOptions](../../models/filter-options.md) | :heavy_minus_sign:                                     | Available filter options for a connector               |