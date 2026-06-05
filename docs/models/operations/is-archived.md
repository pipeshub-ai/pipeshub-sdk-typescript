# IsArchived

Optional archived flag applied to the `sharedWithMeConversations`
branch before the route-level non-archived guard is enforced.
Accepted values are `true` and `false`.


## Example Usage

```typescript
import { IsArchived } from "@pipeshub-ai/sdk/models/operations";

let value: IsArchived = "true";
```

## Values

```typescript
"true" | "false"
```