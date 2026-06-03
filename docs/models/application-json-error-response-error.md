# ApplicationJsonErrorResponseError

## Example Usage

```typescript
import { ApplicationJsonErrorResponseError } from "@pipeshub-ai/sdk/models";

let value: ApplicationJsonErrorResponseError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `code`                                                              | *string*                                                            | :heavy_check_mark:                                                  | Machine-readable code (e.g. `HTTP_UNAUTHORIZED`, `HTTP_FORBIDDEN`). |
| `message`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `metadata`                                                          | Record<string, *any*>                                               | :heavy_minus_sign:                                                  | Optional; may appear in non-production for some errors.             |