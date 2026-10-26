# ConnectorAuthType

How a connector instance signs in to its source. Each connector type supports a subset; see `supportedAuthTypes` in the registry.

## Example Usage

```typescript
import { ConnectorAuthType } from "@pipeshub-ai/sdk/models";

let value: ConnectorAuthType = "API_TOKEN";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OAUTH" | "OAUTH_ADMIN_CONSENT" | "API_TOKEN" | "BEARER_TOKEN" | "BASIC_AUTH" | "ACCESS_KEY" | "IAM_ROLE" | "ACCOUNT_KEY" | "CONNECTION_STRING" | "ENTRA_ID" | "CUSTOM" | "NONE" | Unrecognized<string>
```