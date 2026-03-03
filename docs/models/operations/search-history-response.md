# SearchHistoryResponse

Search history with pagination

## Example Usage

```typescript
import { SearchHistoryResponse } from "@pipeshub-ai/sdk/models/operations";

let value: SearchHistoryResponse = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `results`                                              | [models.SearchResult](../../models/search-result.md)[] | :heavy_minus_sign:                                     | N/A                                                    |
| `total`                                                | *number*                                               | :heavy_minus_sign:                                     | Total number of searches                               |
| `page`                                                 | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |