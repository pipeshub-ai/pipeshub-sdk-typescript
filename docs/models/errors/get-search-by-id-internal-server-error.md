# GetSearchByIdInternalServerError

Server error. Possible causes:

- Explicit `InternalServerError`
  or any other 500 `BaseError` thrown by the handler.
- Non-`BaseError` exception caught by the
  global error middleware.
- Response serializer fallback.


## Example Usage

```typescript
import { GetSearchByIdInternalServerError } from "@pipeshub-ai/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                                     | [operations.GetSearchByIdInternalServerErrorError](../../models/operations/get-search-by-id-internal-server-error-error.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |