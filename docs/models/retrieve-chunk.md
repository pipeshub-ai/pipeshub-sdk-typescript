# RetrieveChunk

## Example Usage

```typescript
import { RetrieveChunk } from "@pipeshub-ai/sdk/models";

let value: RetrieveChunk = {
  id: "<id>",
  text: "<value>",
  record: {},
  citation: {},
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | Stable for the same indexed block, for deduplication and caching.    |
| `text`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `score`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `record`                                                             | [models.RetrieveChunkRecord](../models/retrieve-chunk-record.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `citation`                                                           | [models.RetrieveChunkCitation](../models/retrieve-chunk-citation.md) | :heavy_check_mark:                                                   | N/A                                                                  |