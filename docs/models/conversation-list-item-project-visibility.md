# ConversationListItemProjectVisibility

Only meaningful when `projectId` is set. `private` (default)
keeps the conversation visible to its owner only; `project`
exposes it to every member of the linked project. See
`PATCH /conversations/{conversationId}/project-visibility`.


## Example Usage

```typescript
import { ConversationListItemProjectVisibility } from "@pipeshub-ai/sdk/models";

let value: ConversationListItemProjectVisibility = "project";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"private" | "project" | Unrecognized<string>
```