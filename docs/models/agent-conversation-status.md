# AgentConversationStatus

Same values as `Conversation.status`.

## Example Usage

```typescript
import { AgentConversationStatus } from "@pipeshub-ai/sdk/models";

let value: AgentConversationStatus = "Complete";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"None" | "Inprogress" | "Complete" | "Failed" | "Stopped" | Unrecognized<string>
```