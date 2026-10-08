# ProjectListItemRole

Caller's effective role on this project (owner, explicit
member role, or `viewer` via `visibility: org`).


## Example Usage

```typescript
import { ProjectListItemRole } from "@pipeshub-ai/sdk/models";

let value: ProjectListItemRole = "owner";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"owner" | "editor" | "viewer" | Unrecognized<string>
```