# SearchHistoryShared

Filter results by their shared status. Accepted values are
`'true'` / `'1'` (return only shared searches) and
`'false'` / `'0'` (exclude shared searches). Matching is
case-insensitive and surrounding whitespace is trimmed.


## Example Usage

```typescript
import { SearchHistoryShared } from "@pipeshub-ai/sdk/models/operations";

let value: SearchHistoryShared = "0";
```

## Values

```typescript
"true" | "false" | "1" | "0"
```