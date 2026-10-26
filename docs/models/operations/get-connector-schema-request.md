# GetConnectorSchemaRequest

## Example Usage

```typescript
import { GetConnectorSchemaRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorSchemaRequest = {
  connectorType: "Jira",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `connectorType`                                      | *string*                                             | :heavy_check_mark:                                   | Connector type: `type` from GET /connectors/registry | Jira                                                 |