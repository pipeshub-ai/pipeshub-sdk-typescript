# ByRecordType

## Example Usage

```typescript
import { ByRecordType } from "@pipeshub-ai/sdk/models";

let value: ByRecordType = {
  recordType: "FILE",
  total: 288658,
  indexingStatus: {},
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `recordType`                                                                          | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | FILE                                                                                  |
| `total`                                                                               | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |                                                                                       |
| `indexingStatus`                                                                      | [models.ConnectorIndexingStatusCounts](../models/connector-indexing-status-counts.md) | :heavy_check_mark:                                                                    | Number of records in each indexing status.                                            |                                                                                       |
| `extractionStatus`                                                                    | Record<string, *number*>                                                              | :heavy_minus_sign:                                                                    | Record counts by classification (`classify` stage) status.                            |                                                                                       |
| `entitiesStatus`                                                                      | Record<string, *number*>                                                              | :heavy_minus_sign:                                                                    | Record counts by named-entity extraction (`entities` stage) status.                   |                                                                                       |