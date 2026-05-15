# GetSearchByIdErrorValidationError

## Example Usage

```typescript
import { GetSearchByIdErrorValidationError } from "@pipeshub-ai/sdk/models/operations";

let value: GetSearchByIdErrorValidationError = {
  code: "VALIDATION_ERROR",
  message: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                           | [operations.GetSearchByIdCodeValidationError](../../models/operations/get-search-by-id-code-validation-error.md) | :heavy_check_mark:                                                                                               | Machine-readable error code. `VALIDATION_ERROR`<br/>is emitted when the request fails Zod<br/>validation.<br/>   |
| `message`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Human-readable description of the failure.                                                                       |