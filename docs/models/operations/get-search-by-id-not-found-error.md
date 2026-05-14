# GetSearchByIdNotFoundError

## Example Usage

```typescript
import { GetSearchByIdNotFoundError } from "@pipeshub-ai/sdk/models/operations";

let value: GetSearchByIdNotFoundError = {
  code: "HTTP_NOT_FOUND",
  message: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `code`                                                                                                | [operations.GetSearchByIdNotFoundCode](../../models/operations/get-search-by-id-not-found-code.md)    | :heavy_check_mark:                                                                                    | Machine-readable error code. `HTTP_NOT_FOUND`<br/>is emitted when the addressed resource does<br/>not exist.<br/> |
| `message`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | Human-readable description of the failure.                                                            |