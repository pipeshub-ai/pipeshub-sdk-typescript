# GetConnectorEgressIpsResponse

Egress IP addresses

## Example Usage

```typescript
import { GetConnectorEgressIpsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorEgressIpsResponse = {
  success: false,
  egressIps: [
    "203.0.113.10",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `success`          | *boolean*          | :heavy_check_mark: | N/A                |                    |
| `egressIps`        | *string*[]         | :heavy_check_mark: | N/A                | [<br/>"203.0.113.10"<br/>] |