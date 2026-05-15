# GetAvailableModelsByTypeErrorValidationError

## Example Usage

```typescript
import { GetAvailableModelsByTypeErrorValidationError } from "@pipeshub-ai/sdk/models/operations";

let value: GetAvailableModelsByTypeErrorValidationError = {
  code: "VALIDATION_ERROR",
  message: "Validation failed",
  metadata: {
    errors: [],
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                                  | [operations.GetAvailableModelsByTypeCodeValidationError](../../models/operations/get-available-models-by-type-code-validation-error.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     | VALIDATION_ERROR                                                                                                                        |
| `message`                                                                                                                               | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     | Validation failed                                                                                                                       |
| `metadata`                                                                                                                              | [operations.GetAvailableModelsByTypeMetadata](../../models/operations/get-available-models-by-type-metadata.md)                         | :heavy_check_mark:                                                                                                                      | Per-field validation detail from Zod.                                                                                                   |                                                                                                                                         |