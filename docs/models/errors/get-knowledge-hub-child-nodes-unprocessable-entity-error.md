# GetKnowledgeHubChildNodesUnprocessableEntityError

A listing that spans a whole connector (a flattened listing, a search or a filter) was too large for the
database to hold in memory, so it was refused instead of cut short. No page is returned. Open a folder
(`GET /knowledgeBase/knowledge-hub/nodes/{parentType}/{parentId}`) to see its records, or add a search (`q`),
which keeps only matching records in memory. Choosing a connector, or a filter that keeps most records (such as
`nodeTypes`), does not help. Sorting by name with no filters is served from stored visibility where the
connector allows it and is not affected.


## Example Usage

```typescript
import { GetKnowledgeHubChildNodesUnprocessableEntityError } from "@pipeshub-ai/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                                                             | [operations.GetKnowledgeHubChildNodesUnprocessableEntityError](../../models/operations/get-knowledge-hub-child-nodes-unprocessable-entity-error.md) | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |