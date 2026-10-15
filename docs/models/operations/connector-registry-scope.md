# ConnectorRegistryScope

Scope determines visibility and access control for connectors:<br>
<ul>
<li><code>team</code> - Available to all users in the organization (admin-only creation)</li>
<li><code>personal</code> - Private to the creating user only</li>
</ul>


## Example Usage

```typescript
import { ConnectorRegistryScope } from "@pipeshub-ai/sdk/models/operations";

let value: ConnectorRegistryScope = "team";
```

## Values

```typescript
"team" | "personal"
```