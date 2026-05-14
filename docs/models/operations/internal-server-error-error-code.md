# InternalServerErrorErrorCode

Machine-readable error code.

- `HTTP_INTERNAL_SERVER_ERROR` — explicit
  `InternalServerError` raised by the handler.
- `INTERNAL_ERROR` — unhandled exception
  caught by the global error middleware.
- `MIDDLEWARE_ERROR` — the error middleware
  itself failed while serializing the
  response.


## Example Usage

```typescript
import { InternalServerErrorErrorCode } from "@pipeshub-ai/sdk/models/operations";

let value: InternalServerErrorErrorCode = "INTERNAL_ERROR";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"HTTP_INTERNAL_SERVER_ERROR" | "INTERNAL_ERROR" | "MIDDLEWARE_ERROR" | Unrecognized<string>
```