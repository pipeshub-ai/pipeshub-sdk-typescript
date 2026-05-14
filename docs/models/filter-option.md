# FilterOption

A single filter option for knowledge hub filters.

## Example Usage

```typescript
import { FilterOption } from "@pipeshub-ai/sdk/models";

let value: FilterOption = {
  id: "<id>",
  label: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | Filter ID value to send in requests.                                |
| `label`                                                             | *string*                                                            | :heavy_check_mark:                                                  | Display label for the filter.                                       |
| `type`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | Additional type information (currently unused, may be null).        |
| `connectorType`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | Connector type/name. Set only for entries in the `connectors` list. |