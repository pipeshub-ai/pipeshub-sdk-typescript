# ResyncConnectorRequestBody

## Example Usage

```typescript
import { ResyncConnectorRequestBody } from "@pipeshub-ai/sdk/models";

let value: ResyncConnectorRequestBody = {
  connectorName: "RSS",
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               | Example                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectorName`                                                                                                                                           | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The connector's type as the registry lists it, for example `RSS` or<br/>`Jira`. It names the sync event; the connector synced is always the<br/>one in the path.<br/> | RSS                                                                                                                                                       |
| `fullSync`                                                                                                                                                | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | When true, triggers a full sync instead of incremental.                                                                                                   |                                                                                                                                                           |