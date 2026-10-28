# GetKnowledgeHubRootNodesSortBy

Field to sort results by. Omitted → default `updatedAt`.
Any other value is answered `400` ("Invalid sort_by: ...").


## Example Usage

```typescript
import { GetKnowledgeHubRootNodesSortBy } from "@pipeshub-ai/sdk/models/operations";

let value: GetKnowledgeHubRootNodesSortBy = "size";
```

## Values

```typescript
"name" | "createdAt" | "updatedAt" | "size" | "type"
```