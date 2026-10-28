# ArchiveSearchShared

Additional `isShared` filter. `'true'` / `'1'` and `'false'` / `'0'`,
case-insensitive; anything else is refused with `400`. The search is only archived
if it matches, otherwise `404`.


## Example Usage

```typescript
import { ArchiveSearchShared } from "@pipeshub-ai/sdk/models/operations";

let value: ArchiveSearchShared = "false";
```

## Values

```typescript
"true" | "false" | "1" | "0"
```