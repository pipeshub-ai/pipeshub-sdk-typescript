# UpdateConversationTitleStatus

Current status of the conversation:
- `None` — no activity yet
- `Inprogress` — AI is processing
- `Complete` — response ready
- `Failed` — error occurred
- `Stopped` — cancelled, or the client disconnected mid-answer


## Example Usage

```typescript
import { UpdateConversationTitleStatus } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConversationTitleStatus = "Inprogress";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"None" | "Inprogress" | "Complete" | "Failed" | "Stopped" | Unrecognized<string>
```