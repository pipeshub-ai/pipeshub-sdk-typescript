# SearchHistorySortBy

Field used to sort results. Any value other than `createdAt`,
`lastActivityAt`, or `title` is treated as `lastActivityAt`.


## Example Usage

```typescript
import { SearchHistorySortBy } from "@pipeshub-ai/sdk/models/operations";

let value: SearchHistorySortBy = "createdAt";
```

## Values

```typescript
"createdAt" | "lastActivityAt" | "title"
```