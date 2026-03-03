# AuthType

Authentication type (required if connector supports multiple auth methods)

## Example Usage

```typescript
import { AuthType } from "@pipeshub-ai/sdk/models";

let value: AuthType = "OAUTH";
```

## Values

```typescript
"OAUTH" | "OAUTH_ADMIN_CONSENT" | "API_TOKEN" | "USERNAME_PASSWORD" | "SERVICE_ACCOUNT"
```