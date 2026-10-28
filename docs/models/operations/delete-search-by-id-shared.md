# DeleteSearchByIdShared

Additional `isShared` filter. `'true'` / `'1'` and `'false'` / `'0'`,
case-insensitive; anything else is refused with `400`. The row is only deleted if
it matches.


## Example Usage

```typescript
import { DeleteSearchByIdShared } from "@pipeshub-ai/sdk/models/operations";

let value: DeleteSearchByIdShared = "0";
```

## Values

```typescript
"true" | "false" | "1" | "0"
```