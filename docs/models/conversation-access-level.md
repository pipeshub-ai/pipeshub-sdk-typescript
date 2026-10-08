# ConversationAccessLevel

Computed per request. The requester's effective access level:
their entry in `sharedWith`, or `read` by default.


## Example Usage

```typescript
import { ConversationAccessLevel } from "@pipeshub-ai/sdk/models";

let value: ConversationAccessLevel = "write";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"read" | "write" | Unrecognized<string>
```