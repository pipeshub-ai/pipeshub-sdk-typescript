# GetKnowledgeHubRootNodesForbiddenError

Insufficient OAuth scope.

Only applies to OAuth tokens. The token did not carry the `kb:read`
scope required by this endpoint. Regular (non-OAuth) JWT bearer
tokens are not subject to scope enforcement and will not receive
this error.


## Example Usage

```typescript
import { GetKnowledgeHubRootNodesForbiddenError } from "@pipeshub-ai/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                                               | [operations.GetKnowledgeHubRootNodesErrorHTTPForbidden](../../models/operations/get-knowledge-hub-root-nodes-error-http-forbidden.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |