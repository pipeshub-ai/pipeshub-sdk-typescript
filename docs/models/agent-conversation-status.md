# AgentConversationStatus

Same values as `Conversation.status`.

## Example Usage

```typescript
import { AgentConversationStatus } from "@pipeshub-ai/sdk/models";

let value: AgentConversationStatus = "Complete";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"None" | "Inprogress" | "Complete" | "Failed" | "Stopped" | Unrecognized<string>
```