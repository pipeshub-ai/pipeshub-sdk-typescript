# ConnectorAuthType

Authentication method required by the connector:<br>
<ul>
<li><code>OAUTH</code> - User OAuth consent flow</li>
<li><code>OAUTH_ADMIN_CONSENT</code> - Admin OAuth with org-wide consent</li>
<li><code>API_TOKEN</code> - API key or token authentication</li>
<li><code>USERNAME_PASSWORD</code> - Username/password credentials</li>
<li><code>NONE</code> - No authentication required</li>
</ul>


## Example Usage

```typescript
import { ConnectorAuthType } from "@pipeshub-ai/sdk/models";

let value: ConnectorAuthType = "OAUTH_ADMIN_CONSENT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"OAUTH" | "OAUTH_ADMIN_CONSENT" | "API_TOKEN" | "USERNAME_PASSWORD" | "NONE" | Unrecognized<string>
```