# ReindexRecordRequestBody

Optional body for single-record reindex.

## Example Usage

```typescript
import { ReindexRecordRequestBody } from "@pipeshub-ai/sdk/models";

let value: ReindexRecordRequestBody = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `depth`                                                                                                                                          | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Child traversal depth (`0` = record only; higher values include<br/>descendants; `100` is used by clients for folder-like reindex).<br/>         |
| `force`                                                                                                                                          | *boolean*                                                                                                                                        | :heavy_minus_sign:                                                                                                                               | Force reindex even when the connector considers the record unchanged.                                                                            |
| `statusFilters`                                                                                                                                  | [models.IndexingStatusFilter](../models/indexing-status-filter.md)[]                                                                             | :heavy_minus_sign:                                                                                                                               | When set, only records whose indexing status matches one of these<br/>values are reindexed (applies to the record and its descendants per `depth`).<br/> |