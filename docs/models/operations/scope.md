# Scope

`mine` — owned only. `shared` — projects the caller is a member
of. `all` — owned, member, and `visibility: org` projects.
Defaults to `mine`.


## Example Usage

```typescript
import { Scope } from "@pipeshub-ai/sdk/models/operations";

let value: Scope = "mine";
```

## Values

```typescript
"mine" | "shared" | "all"
```