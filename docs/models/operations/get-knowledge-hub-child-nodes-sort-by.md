# GetKnowledgeHubChildNodesSortBy

Field to sort results by. Omitted → default `updatedAt`.
Any other value is answered `400` ("Invalid sort_by: ...").


## Example Usage

```typescript
import { GetKnowledgeHubChildNodesSortBy } from "@pipeshub-ai/sdk/models/operations";

let value: GetKnowledgeHubChildNodesSortBy = "type";
```

## Values

```typescript
"name" | "createdAt" | "updatedAt" | "size" | "type"
```