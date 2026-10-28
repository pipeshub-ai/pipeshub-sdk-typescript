# UnauthorizedError

Error payload.

## Example Usage

```typescript
import { UnauthorizedError } from "@pipeshub-ai/sdk/models/operations";

let value: UnauthorizedError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                                                                             | *string*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | Identifier for this request, echoed so a bug report can quote it.<br/>Absent when the request never reached the middleware that assigns one.<br/>                                       |
| `code`                                                                                                                                                                                  | *string*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | Machine-readable error code. For this status the<br/>value is `HTTP_UNAUTHORIZED` (missing, invalid, or<br/>expired bearer token, user no longer exists, or the<br/>session has been invalidated).<br/> |
| `message`                                                                                                                                                                               | *string*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | Human-readable description of the failure.                                                                                                                                              |