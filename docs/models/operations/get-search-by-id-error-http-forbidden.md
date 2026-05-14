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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                 | [operations.GetSearchByIdForbiddenCode](../../models/operations/get-search-by-id-forbidden-code.md)                    | :heavy_check_mark:                                                                                                     | Machine-readable error code. `HTTP_FORBIDDEN`<br/>is emitted when the bearer token is valid but<br/>lacks the required scope.<br/> |
| `message`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Human-readable description of the failure.                                                                             |