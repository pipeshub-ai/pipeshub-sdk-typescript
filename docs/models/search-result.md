# SearchResult

Result of a semantic search operation, containing matching
document chunks with relevance scores.


## Example Usage

```typescript
import { SearchResult } from "@pipeshub-ai/sdk/models";

let value: SearchResult = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique search record identifier                                                               |
| `searchId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Alias for _id                                                                                 |
| `query`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The original search query                                                                     |
| `results`                                                                                     | [models.SearchResultItem](../models/search-result-item.md)[]                                  | :heavy_minus_sign:                                                                            | Matching content chunks                                                                       |
| `records`                                                                                     | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Map of record IDs to record names                                                             |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isShared`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sharedWith`                                                                                  | [models.SearchResultSharedWith](../models/search-result-shared-with.md)[]                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isArchived`                                                                                  | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |