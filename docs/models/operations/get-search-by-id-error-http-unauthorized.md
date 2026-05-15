# GetSearchByIdErrorHTTPUnauthorized

## Example Usage

```typescript
import { GetSearchByIdErrorHTTPUnauthorized } from "@pipeshub-ai/sdk/models/operations";

let value: GetSearchByIdErrorHTTPUnauthorized = {
  code: "HTTP_UNAUTHORIZED",
  message: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                              | [operations.GetSearchByIdUnauthorizedCode](../../models/operations/get-search-by-id-unauthorized-code.md)           | :heavy_check_mark:                                                                                                  | Machine-readable error code. `HTTP_UNAUTHORIZED`<br/>is emitted when the bearer token is missing,<br/>invalid, or expired.<br/> |
| `message`                                                                                                           | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Human-readable description of the failure.                                                                          |