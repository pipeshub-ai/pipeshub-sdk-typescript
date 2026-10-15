# RestoredRecordSchema

## Example Usage

```typescript
import { RestoredRecordSchema } from "@pipeshub-ai/sdk/models";

let value: RestoredRecordSchema = {
  recordId: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `recordId`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `name`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | The name it has now                                                       |
| `renamedFrom`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | Its name before restore, when another item next to it had taken that name |