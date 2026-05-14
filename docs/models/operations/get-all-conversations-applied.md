# GetAllConversationsApplied

## Example Usage

```typescript
import { GetAllConversationsApplied } from "@pipeshub-ai/sdk/models/operations";

let value: GetAllConversationsApplied = {
  filters: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  values: {},
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `filters`                                                                                                 | *string*[]                                                                                                | :heavy_check_mark:                                                                                        | Names of filters currently applied.                                                                       |
| `values`                                                                                                  | [operations.Values](../../models/operations/values.md)                                                    | :heavy_check_mark:                                                                                        | Current value for each applied filter. Only keys<br/>present in `filters` are populated; others are<br/>omitted.<br/> |