# GetArchivedConversationsStatus

Current status of the conversation:
- `None` — no activity yet
- `Inprogress` — AI is processing
- `Complete` — response ready
- `Failed` — error occurred
- `Stopped` — cancelled, or the client disconnected mid-answer;
  the last message keeps the partial answer


## Example Usage

```typescript
import { GetArchivedConversationsStatus } from "@pipeshub-ai/sdk/models/operations";

let value: GetArchivedConversationsStatus = "None";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"None" | "Inprogress" | "Complete" | "Failed" | "Stopped" | Unrecognized<string>
```