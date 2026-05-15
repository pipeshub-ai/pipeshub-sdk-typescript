# PersistedSemanticSearchSharedWithEntry

Entry inside `sharedWith[]`. The schema sets `_id: false` on these
sub-docs, so no auto-injected `_id` is present.


## Example Usage

```typescript
import { PersistedSemanticSearchSharedWithEntry } from "@pipeshub-ai/sdk/models";

let value: PersistedSemanticSearchSharedWithEntry = {
  userId: "<value>",
  accessLevel: "read",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                                          | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `accessLevel`                                                                                                                     | [models.PersistedSemanticSearchSharedWithEntryAccessLevel](../models/persisted-semantic-search-shared-with-entry-access-level.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |