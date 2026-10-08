# PrincipalType

Whether `principalId` names a user or a team. Both grant the same `role`, mirroring Collection sharing.

## Example Usage

```typescript
import { PrincipalType } from "@pipeshub-ai/sdk/models";

let value: PrincipalType = "user";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"user" | "team" | Unrecognized<string>
```