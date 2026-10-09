# GetArchivedConversationsAccessLevel

Computed per request. The requester's effective access level:
their entry in `sharedWith`, or `read` by default.


## Example Usage

```typescript
import { GetArchivedConversationsAccessLevel } from "@pipeshub-ai/sdk/models/operations";

let value: GetArchivedConversationsAccessLevel = "write";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"read" | "write" | Unrecognized<string>
```