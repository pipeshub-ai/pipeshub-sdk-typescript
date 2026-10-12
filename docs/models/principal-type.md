# PrincipalType

Whether `principalId` names a user or a team. Both grant the same `role`, mirroring Collection sharing.

## Example Usage

```typescript
import { PrincipalType } from "@pipeshub-ai/sdk/models";

let value: PrincipalType = "user";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"user" | "team" | Unrecognized<string>
```