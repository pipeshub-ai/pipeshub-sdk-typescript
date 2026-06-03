# AgentKnowledgeFiltersParsed

Indexed scope for a knowledge connector: record-group ids (collections /
KB roots) and individual record ids. First-party create/update flows set
`recordGroups` and `records`. On GET, `filtersParsed` is this shape
parsed from the stored `filters` JSON string.


## Example Usage

```typescript
import { AgentKnowledgeFiltersParsed } from "@pipeshub-ai/sdk/models";

let value: AgentKnowledgeFiltersParsed = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `recordGroups`                                         | *string*[]                                             | :heavy_minus_sign:                                     | Record-group ids (e.g. knowledge-base roots) in scope. |
| `records`                                              | *string*[]                                             | :heavy_minus_sign:                                     | Individual record ids in scope.                        |