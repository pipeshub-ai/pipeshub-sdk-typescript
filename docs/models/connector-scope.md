# ConnectorScope

Scope determines visibility and access control for connectors:<br>
<ul>
<li><code>team</code> - Available to all users in the organization (admin-only creation)</li>
<li><code>personal</code> - Private to the creating user only</li>
</ul>


## Example Usage

```typescript
import { ConnectorScope } from "@pipeshub-ai/sdk/models";

let value: ConnectorScope = "team";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"team" | "personal" | Unrecognized<string>
```