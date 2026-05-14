# GetArchivedConversationsStatus

Current status of the conversation:
- `None` — no activity yet
- `Inprogress` — AI is processing
- `Complete` — response ready
- `Failed` — error occurred


## Example Usage

```typescript
import { GetArchivedConversationsStatus } from "@pipeshub-ai/sdk/models/operations";

let value: GetArchivedConversationsStatus = "None";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"None" | "Inprogress" | "Complete" | "Failed" | Unrecognized<string>
```