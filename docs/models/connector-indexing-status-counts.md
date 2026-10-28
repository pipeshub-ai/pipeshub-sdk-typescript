# ConnectorIndexingStatusCounts

Number of records in each indexing status.

## Example Usage

```typescript
import { ConnectorIndexingStatusCounts } from "@pipeshub-ai/sdk/models";

let value: ConnectorIndexingStatusCounts = {};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `notStarted`             | *number*                 | :heavy_minus_sign:       | N/A                      |
| `paused`                 | *number*                 | :heavy_minus_sign:       | N/A                      |
| `inProgress`             | *number*                 | :heavy_minus_sign:       | N/A                      |
| `completed`              | *number*                 | :heavy_minus_sign:       | N/A                      |
| `failed`                 | *number*                 | :heavy_minus_sign:       | N/A                      |
| `fileTypeNotSupported`   | *number*                 | :heavy_minus_sign:       | N/A                      |
| `autoIndexOff`           | *number*                 | :heavy_minus_sign:       | N/A                      |
| `empty`                  | *number*                 | :heavy_minus_sign:       | N/A                      |
| `enableMultimodalModels` | *number*                 | :heavy_minus_sign:       | N/A                      |
| `queued`                 | *number*                 | :heavy_minus_sign:       | N/A                      |
| `skipped`                | *number*                 | :heavy_minus_sign:       | N/A                      |
| `passwordProtected`      | *number*                 | :heavy_minus_sign:       | N/A                      |
| `additionalProperties`   | Record<string, *number*> | :heavy_minus_sign:       | N/A                      |