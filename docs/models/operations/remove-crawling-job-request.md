# RemoveCrawlingJobRequest

## Example Usage

```typescript
import { RemoveCrawlingJobRequest } from "@pipeshub-ai/sdk/models/operations";

let value: RemoveCrawlingJobRequest = {
  connector: "drive",
  connectorId: "507f1f77bcf86cd799439011",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `connector`                                 | *string*                                    | :heavy_check_mark:                          | Connector type identifier                   | drive                                       |
| `connectorId`                               | *string*                                    | :heavy_check_mark:                          | Unique identifier of the connector instance | 507f1f77bcf86cd799439011                    |