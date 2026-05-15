# GetKnowledgeHubChildNodesSortBy

Field to sort results by. Omitted → default `updatedAt`.
Unknown value → silently falls back to `name`.


## Example Usage

```typescript
import { GetKnowledgeHubChildNodesSortBy } from "@pipeshub-ai/sdk/models/operations";

let value: GetKnowledgeHubChildNodesSortBy = "type";
```

## Values

```typescript
"name" | "createdAt" | "updatedAt" | "size" | "type"
```