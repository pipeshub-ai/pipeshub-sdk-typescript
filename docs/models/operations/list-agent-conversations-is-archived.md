# ListAgentConversationsIsArchived

Optional archived flag applied to the `sharedWithMeConversations`
branch before the route-level non-archived guard is enforced.
Accepted values are `true` and `false`.


## Example Usage

```typescript
import { ListAgentConversationsIsArchived } from "@pipeshub-ai/sdk/models/operations";

let value: ListAgentConversationsIsArchived = "false";
```

## Values

```typescript
"true" | "false"
```