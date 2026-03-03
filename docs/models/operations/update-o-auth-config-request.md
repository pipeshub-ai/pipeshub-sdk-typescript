# UpdateOAuthConfigRequest

## Example Usage

```typescript
import { UpdateOAuthConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateOAuthConfigRequest = {
  connectorType: "<value>",
  configId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `connectorType`                                                                                         | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `configId`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `body`                                                                                                  | [operations.UpdateOAuthConfigRequestBody](../../models/operations/update-o-auth-config-request-body.md) | :heavy_check_mark:                                                                                      | Request payload                                                                                         |