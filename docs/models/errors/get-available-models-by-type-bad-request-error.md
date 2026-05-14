# GetAvailableModelsByTypeBadRequestError

Invalid `modelType` path parameter.

The `modelType` value was not one of the supported enum categories.
This response is produced by the Zod validation middleware **before**
the handler runs. The `error.metadata.errors` array contains
per-field detail about exactly which constraint failed.


## Example Usage

```typescript
import { GetAvailableModelsByTypeBadRequestError } from "@pipeshub-ai/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                                                   | [operations.GetAvailableModelsByTypeErrorValidationError](../../models/operations/get-available-models-by-type-error-validation-error.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |