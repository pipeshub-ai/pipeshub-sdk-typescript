# ConnectorFilterValue

A saved filter. Sync parses only entries that carry `operator` and `type`; one without `type` is saved but skipped when the connector syncs.

## Example Usage

```typescript
import { ConnectorFilterValue } from "@pipeshub-ai/sdk/models";

let value: ConnectorFilterValue = {
  operator: "<value>",
  value: "<value>",
  type: "number",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `operator`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | One of the field's `operators`, for example `in` or `is_after`              |
| `value`                                                                     | *any*                                                                       | :heavy_check_mark:                                                          | The filter value; its type follows `type`                                   |
| `type`                                                                      | [models.ConnectorFilterValueType](../models/connector-filter-value-type.md) | :heavy_check_mark:                                                          | The field's `filterType` from the registry schema                           |