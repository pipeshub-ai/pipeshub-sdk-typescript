# GetOAuthConnectorTypeRequest

## Example Usage

```typescript
import { GetOAuthConnectorTypeRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetOAuthConnectorTypeRequest = {
  connectorType: "Confluence",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `connectorType`                                                                                             | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Registered name of the type, case-sensitive                                                                 | Confluence                                                                                                  |
| `page`                                                                                                      | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Validated like the `page` of `GET /oauth/registry`, then ignored; the reply is the same with or without it. |                                                                                                             |
| `limit`                                                                                                     | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Validated like the `limit` of `GET /oauth/registry`, then ignored.                                          |                                                                                                             |
| `search`                                                                                                    | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Validated as a single text value, then ignored.                                                             |                                                                                                             |