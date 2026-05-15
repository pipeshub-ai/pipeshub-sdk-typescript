# SemanticSearchAiResponse

Payload returned by the AI retrieval service for a semantic search (embedded in `searchResponse`).
Optional `virtual_to_record_map` maps each virtual record id (string key) to one resolved graph record document.
Empty responses from the retrieval layer omit `virtual_to_record_map`; success payloads may include it alongside hits and records.


## Example Usage

```typescript
import { SemanticSearchAiResponse } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchAiResponse = {
  searchResults: [],
  records: [
    {},
  ],
  status: "<value>",
  statusCode: 75960,
  message: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `searchResults`                                                                                    | [models.SemanticSearchHit](../models/semantic-search-hit.md)[]                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `records`                                                                                          | [models.SemanticSearchGraphRecord](../models/semantic-search-graph-record.md)[]                    | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `statusCode`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `message`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `appliedFilters`                                                                                   | [models.SemanticSearchAppliedFilters](../models/semantic-search-applied-filters.md)                | :heavy_minus_sign:                                                                                 | Present when KB filters were applied to the search request.                                        |
| `virtualToRecordMap`                                                                               | Record<string, [models.SemanticSearchGraphRecord](../models/semantic-search-graph-record.md)>      | :heavy_minus_sign:                                                                                 | Maps virtual record id (object property name) to the accessible graph record document for that id. |