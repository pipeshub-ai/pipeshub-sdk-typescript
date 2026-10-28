# OauthUserInfoInternalServerError

The scope check failed unexpectedly (OAuth body, `error` is `server_error`).

A JSON body larger than 10 MB, or a form-encoded body larger than 100 KB or with more than 1000 fields, is answered `413` by the app-wide body parsers instead, also before authentication.



## Supported Types

### `errors.OAuthBearerTokenError`

```typescript
const value: errors.OAuthBearerTokenError = {
  error: "server_error",
  errorDescription: "Bearer token required",
  scope: "openid",
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

