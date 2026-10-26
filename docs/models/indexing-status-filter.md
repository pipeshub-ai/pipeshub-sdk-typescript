# IndexingStatusFilter

Indexing status used to filter which records are included in a scoped
reindex (record or record-group). Omit `statusFilters` to reindex all
descendants regardless of status. `SKIPPED` only matches a pipeline
stage's status (a stage that did not apply to the record), so it is
useful with a connector reindex that sets `stages`.


## Example Usage

```typescript
import { IndexingStatusFilter } from "@pipeshub-ai/sdk/models";

let value: IndexingStatusFilter = "AUTO_INDEX_OFF";
```

## Values

```typescript
"NOT_STARTED" | "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "FILE_TYPE_NOT_SUPPORTED" | "AUTO_INDEX_OFF" | "EMPTY" | "SKIPPED"
```