# AgentListItemDefaultReasoningEffort

Agent-level reasoning effort used when a chat request omits its own. Null when unset.

## Example Usage

```typescript
import { AgentListItemDefaultReasoningEffort } from "@pipeshub-ai/sdk/models";

let value: AgentListItemDefaultReasoningEffort = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "low" | "medium" | "high" | "max" | Unrecognized<string>
```