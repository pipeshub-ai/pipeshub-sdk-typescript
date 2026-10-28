# UpdateOAuthAppRequestKnowledgeLimit

`null` lifts the limit. A change that takes anything away revokes
the app's outstanding tokens, so users connect again. A change
that only adds (a lift included) keeps them: each token, and each
refresh of it, stays at the limit its user agreed to, and the new
items reach a user once they connect again.


## Example Usage

```typescript
import { UpdateOAuthAppRequestKnowledgeLimit } from "@pipeshub-ai/sdk/models";

let value: UpdateOAuthAppRequestKnowledgeLimit = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `apps`                                                                     | *string*[]                                                                 | :heavy_minus_sign:                                                         | Whole connectors and collections.                                          |
| `recordGroups`                                                             | *string*[]                                                                 | :heavy_minus_sign:                                                         | Record groups (a drive, space or project), with the groups nested in them. |
| `records`                                                                  | *string*[]                                                                 | :heavy_minus_sign:                                                         | Folders or records, with everything under them.                            |