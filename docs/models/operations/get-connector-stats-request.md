# GetConnectorStatsRequest

## Example Usage

```typescript
import { GetConnectorStatsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorStatsRequest = {
  connectorId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectorId`                                                                                                                                                                             | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | Connector instance ID (`_key` of the instance) or knowledge base ID.<br/>Unlike the other instance routes, the ID is not checked against a<br/>pattern: an ID no instance has is answered `404`.<br/> |