# IndexingStatusFilter

Indexing status used to filter which records are included in a scoped
reindex (record or record-group). Omit `statusFilters` to reindex all
descendants regardless of status.


## Example Usage

```typescript
import { IndexingStatusFilter } from "@pipeshub-ai/sdk/models";

let value: IndexingStatusFilter = "FILE_TYPE_NOT_SUPPORTED";
```

## Values

```typescript
"NOT_STARTED" | "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "FILE_TYPE_NOT_SUPPORTED" | "AUTO_INDEX_OFF" | "EMPTY"
```