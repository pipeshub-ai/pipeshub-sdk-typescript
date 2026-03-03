# AgentConversationStatus

## Example Usage

```typescript
import { AgentConversationStatus } from "@pipeshub-ai/sdk/models";

let value: AgentConversationStatus = "COMPLETED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"INPROGRESS" | "COMPLETED" | "FAILED" | Unrecognized<string>
```