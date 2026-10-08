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
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"private" | "members" | Unrecognized<string>
```