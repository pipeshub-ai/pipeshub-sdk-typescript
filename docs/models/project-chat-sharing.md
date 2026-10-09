# ProjectChatSharing

Owner-controlled default for new conversations created in this
project. `private` keeps new chats visible to their own owner
only; `members` exposes them to every project member
(`projectVisibility: project`). A conversation's own
`projectVisibility` can override this default per-chat.


## Example Usage

```typescript
import { ProjectChatSharing } from "@pipeshub-ai/sdk/models";

let value: ProjectChatSharing = "members";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"private" | "members" | Unrecognized<string>
```