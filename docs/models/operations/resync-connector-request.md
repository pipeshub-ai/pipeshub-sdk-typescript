# ResyncConnectorRequest

Request body for Resync connector

## Example Usage

```typescript
import { ResyncConnectorRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ResyncConnectorRequest = {
  connectorName: "GOOGLE_DRIVE",
  connectorId: "<id>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `connectorName`       | *string*              | :heavy_check_mark:    | Connector type name   | GOOGLE_DRIVE          |
| `connectorId`         | *string*              | :heavy_check_mark:    | Connector instance ID |                       |