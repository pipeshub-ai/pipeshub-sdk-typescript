# IsVersioned

Enable version tracking. `true`/`1` and `false`/`0`/empty are read as
booleans; any other text is answered `500` (the validator throws a plain
error).


## Example Usage

```typescript
import { IsVersioned } from "@pipeshub-ai/sdk/models/operations";

let value: IsVersioned = "false";
```

## Values

```typescript
"true" | "false" | "1" | "0" | ""
```