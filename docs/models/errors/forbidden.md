# Forbidden

Forbidden. Returned when the OAuth token is missing the required `kb:read` scope
(`ErrorResponse`), or as `{"error": "You do not have permission to access this record"}`
when the caller has no access to the record or the record is in the trash.



## Supported Types

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

### `errors.StreamRecordErrorResponse`

```typescript
const value: errors.StreamRecordErrorResponse = {
  error: "<value>",
};
```

