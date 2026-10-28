# GetSearchByIdShared

Return the search only if its `isShared` matches. `'true'` / `'1'` and `'false'` /
`'0'`, case-insensitive; anything else is refused with `400`.


## Example Usage

```typescript
import { GetSearchByIdShared } from "@pipeshub-ai/sdk/models/operations";

let value: GetSearchByIdShared = "1";
```

## Values

```typescript
"true" | "false" | "1" | "0"
```