# SearchHistoryUnauthorizedError

Error payload.

## Example Usage

```typescript
import { SearchHistoryUnauthorizedError } from "@pipeshub-ai/sdk/models/operations";

let value: SearchHistoryUnauthorizedError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                                                                                  | *string*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | Machine-readable error code. For this status the<br/>value is `HTTP_UNAUTHORIZED` (missing, invalid, or<br/>expired bearer token, user no longer exists, or the<br/>session has been invalidated).<br/> |
| `message`                                                                                                                                                                               | *string*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | Human-readable description of the failure.                                                                                                                                              |