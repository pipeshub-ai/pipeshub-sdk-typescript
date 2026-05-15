# ErrorResponse

Standard error envelope returned by all errors routed through `ErrorMiddleware`.
Applies to all `BaseError` subclasses including `HttpError`, `ValidationError`, and others.
The `code` field is a machine-readable string identifying the error type (e.g.
`HTTP_UNAUTHORIZED`, `HTTP_NOT_FOUND`, `VALIDATION_ERROR`, `INTERNAL_ERROR`).


## Example Usage

```typescript
import { ErrorResponse } from "@pipeshub-ai/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `error`                                  | [models.ErrorT](../../models/error-t.md) | :heavy_check_mark:                       | N/A                                      |