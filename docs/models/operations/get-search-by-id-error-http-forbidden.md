# GetSearchByIdErrorHTTPForbidden

## Example Usage

```typescript
import { GetSearchByIdErrorHTTPForbidden } from "@pipeshub-ai/sdk/models/operations";

let value: GetSearchByIdErrorHTTPForbidden = {
  code: "HTTP_FORBIDDEN",
  message: "<value>",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                               | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Identifier for this request, echoed so a bug report can quote it.<br/>Absent when the request never reached the middleware that assigns one.<br/> |
| `code`                                                                                                                                    | [operations.GetSearchByIdForbiddenCode](../../models/operations/get-search-by-id-forbidden-code.md)                                       | :heavy_check_mark:                                                                                                                        | Machine-readable error code. `HTTP_FORBIDDEN`<br/>is emitted when the bearer token is valid but<br/>lacks the required scope.<br/>        |
| `message`                                                                                                                                 | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Human-readable description of the failure.                                                                                                |