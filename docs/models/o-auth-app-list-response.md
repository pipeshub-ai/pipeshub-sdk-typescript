# OAuthAppListResponse

Paginated list of OAuth apps

## Example Usage

```typescript
import { OAuthAppListResponse } from "@pipeshub-ai/sdk/models";

let value: OAuthAppListResponse = {
  data: [
    {
      id: "<id>",
      slug: "<value>",
      clientId: "<id>",
      name: "<value>",
      redirectUris: [
        "https://blond-surface.com/",
      ],
      allowedGrantTypes: [
        "<value 1>",
      ],
      allowedScopes: [
        "<value 1>",
      ],
      status: "revoked",
      isConfidential: true,
      accessTokenLifetime: 386949,
      refreshTokenLifetime: 717594,
      createdAt: new Date("2025-10-19T05:35:59.333Z"),
      updatedAt: new Date("2026-06-23T14:29:33.045Z"),
    },
  ],
  pagination: {
    page: 69048,
    limit: 79530,
    total: 53194,
    totalPages: 934588,
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [models.OAuthAppResponse](../models/o-auth-app-response.md)[]                             | :heavy_check_mark:                                                                        | List of OAuth apps                                                                        |
| `pagination`                                                                              | [models.OAuthAppListResponsePagination](../models/o-auth-app-list-response-pagination.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |