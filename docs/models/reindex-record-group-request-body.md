# ReindexRecordGroupRequestBody

Optional body for record-group (folder/KB container) reindex.

## Example Usage

```typescript
import { ReindexRecordGroupRequestBody } from "@pipeshub-ai/sdk/models";

let value: ReindexRecordGroupRequestBody = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `depth`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | Depth of records under the record group to include.                     |
| `force`                                                                 | *boolean*                                                               | :heavy_minus_sign:                                                      | Force reindex for all matched records in the group.                     |
| `statusFilters`                                                         | [models.IndexingStatusFilter](../models/indexing-status-filter.md)[]    | :heavy_minus_sign:                                                      | When set, only records matching these indexing statuses are reindexed.<br/> |