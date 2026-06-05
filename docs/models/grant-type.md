# GrantType

OAuth grant type:
- `authorization_code`: Exchange auth code for tokens
- `client_credentials`: Machine-to-machine auth
- `refresh_token`: Get new access token using refresh token


## Example Usage

```typescript
import { GrantType } from "@pipeshub-ai/sdk/models";

let value: GrantType = "authorization_code";
```

## Values

```typescript
"authorization_code" | "client_credentials" | "refresh_token"
```