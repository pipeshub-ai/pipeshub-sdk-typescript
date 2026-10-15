# ConnectorStats

Statistics for a connector's records

## Example Usage

```typescript
import { ConnectorStats } from "@pipeshub-ai/sdk/models";

let value: ConnectorStats = {
  success: true,
  data: {
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
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `success`                        | *boolean*                        | :heavy_check_mark:               | N/A                              |
| `data`                           | [models.Data](../models/data.md) | :heavy_check_mark:               | N/A                              |