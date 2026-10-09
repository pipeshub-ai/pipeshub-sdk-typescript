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

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                               | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Identifier for this request, echoed so a bug report can quote it.<br/>Absent when the request never reached the middleware that assigns one.<br/> |
| `code`                                                                                                                                    | [operations.GetSearchByIdCodeValidationError](../../models/operations/get-search-by-id-code-validation-error.md)                          | :heavy_check_mark:                                                                                                                        | Machine-readable error code. `VALIDATION_ERROR`<br/>is emitted when the request fails Zod<br/>validation.<br/>                            |
| `message`                                                                                                                                 | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Human-readable description of the failure.                                                                                                |