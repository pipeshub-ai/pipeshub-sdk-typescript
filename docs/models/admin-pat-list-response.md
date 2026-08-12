# AdminPatListResponse

Response body for `GET /personal-access-tokens/admin` (`adminListTokens`).
Paginated — unlike the self-service `ListPatResponse` — since an org
can have far more active tokens than a fixed-window cap's worth.


## Example Usage

```typescript
import { AdminPatListResponse } from "@pipeshub-ai/sdk/models";

let value: AdminPatListResponse = {
  data: [],
  pagination: {
    page: 284963,
    limit: 836873,
    total: 85026,
    totalPages: 671172,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [models.AdminPatListItem](../models/admin-pat-list-item.md)[]                            | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pagination`                                                                             | [models.AdminPatListResponsePagination](../models/admin-pat-list-response-pagination.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |