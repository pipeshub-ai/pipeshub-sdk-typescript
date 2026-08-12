# AgentConversationDetailMessageMessageType

## Example Usage

```typescript
import { AgentConversationDetailMessageMessageType } from "@pipeshub-ai/sdk/models";

let value: AgentConversationDetailMessageMessageType = "feedback";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"user_query" | "bot_response" | "error" | "feedback" | "system" | "tool_call" | Unrecognized<string>
```