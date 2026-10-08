# AgentConversationListItemProjectVisibility

Only meaningful when `projectId` is set. `project` exposes the
conversation to every member of the linked project.


## Example Usage

```typescript
import { AgentConversationListItemProjectVisibility } from "@pipeshub-ai/sdk/models";

let value: AgentConversationListItemProjectVisibility = "project";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"private" | "project" | Unrecognized<string>
```