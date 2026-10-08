# Role

## Example Usage

```typescript
import { Role } from "@pipeshub-ai/sdk/models/operations";

let value: Role = "owner";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"owner" | "editor" | "viewer" | Unrecognized<string>
```