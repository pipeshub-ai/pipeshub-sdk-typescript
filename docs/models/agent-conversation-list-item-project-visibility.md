# AgentConversationListItemProjectVisibility

Only meaningful when `projectId` is set. `project` exposes the
conversation to every member of the linked project.


## Example Usage

```typescript
import { AgentConversationListItemProjectVisibility } from "@pipeshub-ai/sdk/models";

let value: AgentConversationListItemProjectVisibility = "project";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"private" | "project" | Unrecognized<string>
```