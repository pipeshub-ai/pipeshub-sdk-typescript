# PersistedSemanticSearchSharedWithEntry

Entry inside `sharedWith[]`: one user the search is shared with and
the access level they were given.


## Example Usage

```typescript
import { PersistedSemanticSearchSharedWithEntry } from "@pipeshub-ai/sdk/models";

let value: PersistedSemanticSearchSharedWithEntry = {
  userId: "<value>",
  accessLevel: "read",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                    | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Identifier of this share entry, generated when the entry is<br/>stored. It identifies the entry, not the user — use `userId`<br/>for the user.<br/> |
| `userId`                                                                                                                                | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | User the search is shared with.                                                                                                         |
| `accessLevel`                                                                                                                           | [models.PersistedSemanticSearchSharedWithEntryAccessLevel](../models/persisted-semantic-search-shared-with-entry-access-level.md)       | :heavy_check_mark:                                                                                                                      | Access granted to that user.                                                                                                            |