# OAuthAppListResponse

Paginated list of OAuth apps

## Example Usage

```typescript
import { OAuthAppListResponse } from "@pipeshub-ai/sdk/models";

let value: OAuthAppListResponse = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [models.OAuthAppResponse](../models/o-auth-app-response.md)[] | :heavy_minus_sign:                                            | List of OAuth apps                                            |
| `pagination`                                                  | [models.Pagination](../models/pagination.md)                  | :heavy_minus_sign:                                            | N/A                                                           |