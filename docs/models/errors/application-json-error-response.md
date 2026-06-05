# ApplicationJsonErrorResponse

Standard JSON error envelope from `ErrorMiddleware` for `BaseError` subclasses (`error.middleware.ts`).
Returned for most API 4xx errors (unauthorized, forbidden, not found, validation failures, etc.).


## Example Usage

```typescript
import { ApplicationJsonErrorResponse } from "@pipeshub-ai/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `error`                                                                                           | [models.ApplicationJsonErrorResponseError](../../models/application-json-error-response-error.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |