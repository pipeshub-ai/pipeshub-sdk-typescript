# GetOAuthRegistryResponse

OAuth connector types retrieved

## Example Usage

```typescript
import { GetOAuthRegistryResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetOAuthRegistryResponse = {
  success: true,
  connectors: [],
  pagination: {
    page: 262836,
    limit: 637093,
    totalCount: 498161,
    totalPages: 987333,
    hasPrev: false,
    hasNext: true,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `success`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `connectors`                                                         | [models.OAuthRegistryEntry](../../models/o-auth-registry-entry.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [models.ConnectorPagination](../../models/connector-pagination.md)   | :heavy_check_mark:                                                   | N/A                                                                  |