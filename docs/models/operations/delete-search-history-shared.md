# DeleteSearchHistoryShared

Restrict the deletion to rows with this `isShared` value. `'true'` / `'1'` and
`'false'` / `'0'`, case-insensitive; anything else is refused with `400`.


## Example Usage

```typescript
import { DeleteSearchHistoryShared } from "@pipeshub-ai/sdk/models/operations";

let value: DeleteSearchHistoryShared = "true";
```

## Values

```typescript
"true" | "false" | "1" | "0"
```