# AgentConversationListItemAccessLevel

Computed per request from `sharedWith`; defaults to `read` when no
explicit share grant is attached to the serialized row.


## Example Usage

```typescript
import { AgentConversationListItemAccessLevel } from "@pipeshub-ai/sdk/models";

let value: AgentConversationListItemAccessLevel = "read";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"read" | "write" | Unrecognized<string>
```