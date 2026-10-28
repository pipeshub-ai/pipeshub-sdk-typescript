# UnarchiveSearchShared

Additional `isShared` filter. `'true'` / `'1'` and `'false'` / `'0'`,
case-insensitive; anything else is refused with `400`. The search is only unarchived
if it matches, otherwise `404`.


## Example Usage

```typescript
import { UnarchiveSearchShared } from "@pipeshub-ai/sdk/models/operations";

let value: UnarchiveSearchShared = "0";
```

## Values

```typescript
"true" | "false" | "1" | "0"
```