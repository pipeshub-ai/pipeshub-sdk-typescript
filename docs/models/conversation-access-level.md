# ConversationAccessLevel

Computed per request. The requester's effective access level:
their entry in `sharedWith`, or `read` by default.


## Example Usage

```typescript
import { ConversationAccessLevel } from "@pipeshub-ai/sdk/models";

let value: ConversationAccessLevel = "write";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"read" | "write" | Unrecognized<string>
```