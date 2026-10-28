# GetKnowledgeHubRootNodesSortOrder

Sort direction. Omitted → default `desc`. Read case-insensitively;
any other value is answered `400` ("Invalid sort_order: ...").


## Example Usage

```typescript
import { GetKnowledgeHubRootNodesSortOrder } from "@pipeshub-ai/sdk/models/operations";

let value: GetKnowledgeHubRootNodesSortOrder = "desc";
```

## Values

```typescript
"asc" | "desc"
```