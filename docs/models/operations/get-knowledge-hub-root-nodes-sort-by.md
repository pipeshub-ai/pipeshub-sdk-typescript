# GetKnowledgeHubRootNodesSortBy

Field to sort results by. Omitted → default `updatedAt`.
Unknown value → silently falls back to `name`.


## Example Usage

```typescript
import { GetKnowledgeHubRootNodesSortBy } from "@pipeshub-ai/sdk/models/operations";

let value: GetKnowledgeHubRootNodesSortBy = "size";
```

## Values

```typescript
"name" | "createdAt" | "updatedAt" | "size" | "type"
```