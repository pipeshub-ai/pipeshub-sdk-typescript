# GetKnowledgeHubChildNodesSortOrder

Sort direction. Omitted → default `desc`. Read case-insensitively;
any other value is answered `400` ("Invalid sort_order: ...").


## Example Usage

```typescript
import { GetKnowledgeHubChildNodesSortOrder } from "@pipeshub-ai/sdk/models/operations";

let value: GetKnowledgeHubChildNodesSortOrder = "asc";
```

## Values

```typescript
"asc" | "desc"
```