# Stats

## Example Usage

```typescript
import { Stats } from "@pipeshub-ai/sdk/models";

let value: Stats = {
  total: 703687,
  indexingStatus: {},
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `total`                                                                               | *number*                                                                              | :heavy_check_mark:                                                                    | Records synced from the connector                                                     |
| `indexingStatus`                                                                      | [models.ConnectorIndexingStatusCounts](../models/connector-indexing-status-counts.md) | :heavy_check_mark:                                                                    | Number of records in each indexing status.                                            |