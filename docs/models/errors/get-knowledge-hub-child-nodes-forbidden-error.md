# GetKnowledgeHubChildNodesForbiddenError

Insufficient OAuth scope.

Only applies to OAuth tokens. The token did not carry the `kb:read`
scope required by this endpoint. Regular (non-OAuth) JWT bearer
tokens are not subject to scope enforcement and will not receive
this error.


## Example Usage

```typescript
import { GetKnowledgeHubChildNodesForbiddenError } from "@pipeshub-ai/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                                                 | [operations.GetKnowledgeHubChildNodesErrorHTTPForbidden](../../models/operations/get-knowledge-hub-child-nodes-error-http-forbidden.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |