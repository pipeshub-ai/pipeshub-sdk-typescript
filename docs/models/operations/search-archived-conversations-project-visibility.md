# SearchArchivedConversationsProjectVisibility

Only meaningful when `projectId` is set. `private` (default)
keeps the conversation visible to its owner only; `project`
exposes it to every member of the linked project. See
`PATCH /conversations/{conversationId}/project-visibility`.


## Example Usage

```typescript
import { SearchArchivedConversationsProjectVisibility } from "@pipeshub-ai/sdk/models/operations";

let value: SearchArchivedConversationsProjectVisibility = "private";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"private" | "project" | Unrecognized<string>
```