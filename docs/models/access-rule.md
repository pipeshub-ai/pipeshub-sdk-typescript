# AccessRule

How this record's own permissions combine with its ancestors'.
OPEN: an accessible parent, or a direct grant, is enough.
STRICT: every ancestor up to the connector must be accessible too.
RESTRICTED: strict, and a grant on the record itself is required.
Absent on records written before the field existed; read as OPEN.


## Example Usage

```typescript
import { AccessRule } from "@pipeshub-ai/sdk/models";

let value: AccessRule = "OPEN";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OPEN" | "STRICT" | "RESTRICTED" | Unrecognized<string>
```