# SearchHistoryInternalServerErrorError

Error payload.

## Example Usage

```typescript
import { SearchHistoryInternalServerErrorError } from "@pipeshub-ai/sdk/models/operations";

let value: SearchHistoryInternalServerErrorError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                               | Type                                                                                                                                                                                                                | Required                                                                                                                                                                                                            | Description                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | Machine-readable error code. For this status the<br/>value is `HTTP_INTERNAL_SERVER_ERROR` for an<br/>explicit server-side failure, or `INTERNAL_ERROR`<br/>for an unhandled exception coerced by the global<br/>error middleware.<br/> |
| `message`                                                                                                                                                                                                           | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | Human-readable description of the failure.                                                                                                                                                                          |