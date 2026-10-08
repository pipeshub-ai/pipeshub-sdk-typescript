# ProjectKnowledgeScope

Retrieval scope (app connector / knowledge-base ids) inherited by
every conversation in the project when the request itself carries no
`filters`. Same id shapes as `Filters`.


## Example Usage

```typescript
import { ProjectKnowledgeScope } from "@pipeshub-ai/sdk/models";

let value: ProjectKnowledgeScope = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `apps`                                                           | *string*[]                                                       | :heavy_minus_sign:                                               | Connector instance ids scoping this project's default retrieval. |
| `kb`                                                             | *string*[]                                                       | :heavy_minus_sign:                                               | Knowledge-base app ids scoping this project's default retrieval. |