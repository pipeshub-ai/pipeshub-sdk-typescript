# SearchHistoryForbiddenError

Error payload.

## Example Usage

```typescript
import { SearchHistoryForbiddenError } from "@pipeshub-ai/sdk/models/operations";

let value: SearchHistoryForbiddenError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                                         | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Machine-readable error code. For this status the<br/>value is `HTTP_FORBIDDEN` (the token is valid but<br/>does not carry the `semantic:read` scope).<br/> |
| `message`                                                                                                                                      | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Human-readable description of the failure.                                                                                                     |