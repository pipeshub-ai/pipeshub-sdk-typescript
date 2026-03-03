# SearchResultItem

A single matching chunk from semantic search

## Example Usage

```typescript
import { SearchResultItem } from "@pipeshub-ai/sdk/models";

let value: SearchResultItem = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `content`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | The matching text content                                                   |
| `chunkIndex`                                                                | *number*                                                                    | :heavy_minus_sign:                                                          | Index of this chunk within the source document                              |
| `citationType`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | Type of citation/source                                                     |
| `metadata`                                                                  | [models.SearchResultItemMetadata](../models/search-result-item-metadata.md) | :heavy_minus_sign:                                                          | Additional metadata about the source                                        |
| `score`                                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | Relevance score (higher is more relevant)                                   |