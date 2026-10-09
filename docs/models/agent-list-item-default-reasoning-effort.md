# AgentListItemDefaultReasoningEffort

Agent-level reasoning effort used when a chat request omits its own. Null when unset.

## Example Usage

```typescript
import { AgentListItemDefaultReasoningEffort } from "@pipeshub-ai/sdk/models";

let value: AgentListItemDefaultReasoningEffort = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "low" | "medium" | "high" | "max" | Unrecognized<string>
```