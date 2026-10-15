# UpdateOAuthConfigRequest

## Example Usage

```typescript
import { UpdateOAuthConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateOAuthConfigRequest = {
  connectorType: "<value>",
  configId: "<id>",
  body: {
    config: {},
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `connectorType`                                                                                             | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `configId`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `body`                                                                                                      | *operations.UpdateOAuthConfigRequestBody*                                                                   | :heavy_check_mark:                                                                                          | Send `oauthInstanceName`, `config`, or both; a body with neither is<br/>refused, even if it carries `baseUrl`.<br/> |