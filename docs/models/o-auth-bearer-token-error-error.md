# OAuthBearerTokenErrorError

- `invalid_request` - no `Authorization: Bearer` header was sent
- `invalid_token` - the token is malformed, expired, revoked, or its user no longer exists
- `insufficient_scope` - the token is valid but lacks a required scope
- `server_error` - the scope check itself failed


## Example Usage

```typescript
import { OAuthBearerTokenErrorError } from "@pipeshub-ai/sdk/models";

let value: OAuthBearerTokenErrorError = "insufficient_scope";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"invalid_request" | "invalid_token" | "insufficient_scope" | "server_error" | Unrecognized<string>
```