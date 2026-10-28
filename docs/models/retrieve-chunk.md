# RetrieveChunk

## Example Usage

```typescript
import { RetrieveChunk } from "@pipeshub-ai/sdk/models";

let value: RetrieveChunk = {
  id: "<id>",
  text: "<value>",
  record: {
    recordId: "<id>",
    name: "<value>",
    connector: "<value>",
    mimeType: "<value>",
    updatedAt: "1735625194107",
  },
  citation: {
    url: "https://impish-sediment.org",
    recordUrl: null,
    pageNum: [
      17493,
    ],
    blockIndex: 821668,
  },
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