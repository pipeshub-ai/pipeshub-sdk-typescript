# AuthError

Authentication error response with details for debugging and user feedback.<br><br>
<b>Common Error Codes:</b><br>
<ul>
<li><code>INVALID_CREDENTIALS</code> - Wrong password or OTP</li>
<li><code>ACCOUNT_BLOCKED</code> - Account locked after 5 failed attempts</li>
<li><code>SESSION_EXPIRED</code> - Session token has expired</li>
<li><code>OTP_EXPIRED</code> - OTP code has expired (10 min validity)</li>
<li><code>USER_NOT_FOUND</code> - Email not registered</li>
<li><code>INVALID_TOKEN</code> - JWT token is invalid or malformed</li>
<li><code>METHOD_NOT_ALLOWED</code> - Auth method not enabled for org</li>
</ul>


## Example Usage

```typescript
import { AuthError } from "@pipeshub-ai/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `error`                               | *string*                              | :heavy_minus_sign:                    | Error type identifier                 | INVALID_CREDENTIALS                   |
| `message`                             | *string*                              | :heavy_minus_sign:                    | Human-readable error message          | The password you entered is incorrect |
| `code`                                | *string*                              | :heavy_minus_sign:                    | Error code for programmatic handling  | AUTH_001                              |
| `statusCode`                          | *number*                              | :heavy_minus_sign:                    | HTTP status code                      | 401                                   |