# AgentAddMessageRequestReasoningEffort

Reasoning effort for this turn, for models that support it. Stored on
the conversation's model info and forwarded to the AI backend.


## Example Usage

```typescript
import { AgentAddMessageRequestReasoningEffort } from "@pipeshub-ai/sdk/models";

let value: AgentAddMessageRequestReasoningEffort = "low";
```

## Values

```typescript
"none" | "low" | "medium" | "high" | "max"
```