# AuthMethodType

Type of authentication method:
- `password`: Email/password authentication
- `otp`: One-time password via email (6-digit, expires in 10 minutes)
- `google`: Google OAuth 2.0
- `microsoft`: Microsoft OAuth 2.0


## Example Usage

```typescript
import { AuthMethodType } from "@pipeshub-ai/sdk/models";

let value: AuthMethodType = "microsoft";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"otp" | "password" | "google" | "microsoft" | Unrecognized<string>
```