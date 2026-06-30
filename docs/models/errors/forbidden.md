# Forbidden

Forbidden. Returned either when the OAuth token is missing the required
`kb:read` scope or when the authenticated user does not have access to the record.



## Supported Types

### `errors.ErrorResponse`

```typescript
const value: errors.ErrorResponse = {
  error: {
    code: "HTTP_BAD_REQUEST",
    message: "Admin access required",
  },
};
```

### `errors.StreamRecordErrorResponse`

```typescript
const value: errors.StreamRecordErrorResponse = {
  error: "<value>",
};
```

