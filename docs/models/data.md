# Data

## Example Usage

```typescript
import { Data } from "@pipeshub-ai/sdk/models";

let value: Data = {
  orgId: "<id>",
  connectorId: "<id>",
  origin: "CONNECTOR",
  stats: {
    total: 583008,
    indexingStatus: {},
  },
  byRecordType: [
    {
      recordType: "FILE",
      total: 288658,
      indexingStatus: {},
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `orgId`                                                       | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `connectorId`                                                 | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `origin`                                                      | *string*                                                      | :heavy_check_mark:                                            | Where the records come from; `CONNECTOR` for a connector.     | CONNECTOR                                                     |
| `stats`                                                       | [models.Stats](../models/stats.md)                            | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `byRecordType`                                                | [models.ByRecordType](../models/by-record-type.md)[]          | :heavy_check_mark:                                            | The same counts per record type; empty before the first sync. |                                                               |