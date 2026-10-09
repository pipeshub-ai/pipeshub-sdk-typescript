# AgentConversationListItemAccessLevel

Computed per request from `sharedWith`; defaults to `read` when no
explicit share grant is attached to the serialized row.


## Example Usage

```typescript
import { AgentConversationListItemAccessLevel } from "@pipeshub-ai/sdk/models";

let value: AgentConversationListItemAccessLevel = "read";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"read" | "write" | Unrecognized<string>
```