# SearchHistorySortOrder

Sort direction applied to `sortBy`. Only the exact, case-sensitive value `asc` sorts
ascending; any other value (`ASC`, `sideways`, ...) is accepted and sorts descending.
The raw value is echoed in `filters.applied.values.sortOrder`.


## Example Usage

```typescript
import { SearchHistorySortOrder } from "@pipeshub-ai/sdk/models/operations";

let value: SearchHistorySortOrder = "desc";
```

## Values

```typescript
"asc" | "desc"
```