# ArchiveSearchResponse

Search archived successfully

## Example Usage

```typescript
import { ArchiveSearchResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ArchiveSearchResponse = {
  id: "65f1c0a4e2b9c4d8f3a1b2c3",
  status: "archived",
  archivedBy: "65f1c0a4e2b9c4d8f3a1b2c4",
  archivedAt: new Date("2026-05-10T12:34:56.789Z"),
  meta: {
    requestId: "req_8f3a1b2c",
    timestamp: new Date("2026-05-10T12:34:56.789Z"),
    duration: 42,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the archived search.                                                     | 65f1c0a4e2b9c4d8f3a1b2c3                                                                      |
| `status`                                                                                      | [operations.ArchiveSearchStatus](../../models/operations/archive-search-status.md)            | :heavy_check_mark:                                                                            | Resulting status of the search after the operation.                                           | archived                                                                                      |
| `archivedBy`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | User ID of the user who archived the search.                                                  | 65f1c0a4e2b9c4d8f3a1b2c4                                                                      |
| `archivedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the search was archived.                                                       | 2026-05-10 12:34:56.789 +0000 UTC                                                             |
| `meta`                                                                                        | [operations.ArchiveSearchMeta](../../models/operations/archive-search-meta.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |