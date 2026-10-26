# UpdateOAuthAppRequestKnowledgeLimit

`null` lifts the limit. Any change, a lift included, revokes the
app's outstanding tokens, so users connect again.


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