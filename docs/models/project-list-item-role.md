# ProjectListItemRole

Caller's effective role on this project (owner, explicit
member role, or `viewer` via `visibility: org`).


## Example Usage

```typescript
import { ProjectListItemRole } from "@pipeshub-ai/sdk/models";

let value: ProjectListItemRole = "owner";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"owner" | "editor" | "viewer" | Unrecognized<string>
```