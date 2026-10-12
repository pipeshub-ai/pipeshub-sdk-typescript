# AgentConversationProjectVisibility

Only meaningful when `projectId` is set. `project` exposes the
conversation to every member of the linked project.


## Example Usage

```typescript
import { AgentConversationProjectVisibility } from "@pipeshub-ai/sdk/models";

let value: AgentConversationProjectVisibility = "private";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"private" | "project" | Unrecognized<string>
```