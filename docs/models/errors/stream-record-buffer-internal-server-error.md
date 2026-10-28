# StreamRecordBufferInternalServerError

Internal streaming failure, downstream conversion failure, or connector/backend
error proxied by the gateway.


A JSON body larger than 10 MB, or a form-encoded body larger than 100 KB or with more than 1000 fields, is answered `413` by the app-wide body parsers instead, also before authentication.



## Supported Types

### `errors.StreamRecordErrorResponse`

```typescript
const value: errors.StreamRecordErrorResponse = {
  error: "<value>",
};
```

### `errors.ErrorResponse`

```typescript
const value: errors.ErrorResponse = {
  error: {
    code: "HTTP_FORBIDDEN",
    message:
      "You need admin access to do this. Ask an admin in your organisation.",
  },
};
```

