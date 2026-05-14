# UnarchiveSearchResponse

Search unarchived successfully

## Example Usage

```typescript
import { UnarchiveSearchResponse } from "@pipeshub-ai/sdk/models/operations";

let value: UnarchiveSearchResponse = {
  id: "65f1c0a4e2b9c4d8f3a1b2c3",
  status: "unarchived",
  unarchivedBy: "65f1c0a4e2b9c4d8f3a1b2c4",
  unarchivedAt: new Date("2026-05-10T12:34:56.789Z"),
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
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the unarchived search.                                                   | 65f1c0a4e2b9c4d8f3a1b2c3                                                                      |
| `status`                                                                                      | [operations.UnarchiveSearchStatus](../../models/operations/unarchive-search-status.md)        | :heavy_check_mark:                                                                            | Resulting status of the search after the operation.                                           | unarchived                                                                                    |
| `unarchivedBy`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | User ID of the user who unarchived the search.                                                | 65f1c0a4e2b9c4d8f3a1b2c4                                                                      |
| `unarchivedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the search was unarchived.                                                     | 2026-05-10 12:34:56.789 +0000 UTC                                                             |
| `meta`                                                                                        | [operations.UnarchiveSearchMeta](../../models/operations/unarchive-search-meta.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |