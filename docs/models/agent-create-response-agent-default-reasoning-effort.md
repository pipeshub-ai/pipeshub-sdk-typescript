# AgentCreateResponseAgentDefaultReasoningEffort

Agent-level reasoning effort used when a chat request omits its own. Null when unset.

## Example Usage

```typescript
import { AgentCreateResponseAgentDefaultReasoningEffort } from "@pipeshub-ai/sdk/models";

let value: AgentCreateResponseAgentDefaultReasoningEffort = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "low" | "medium" | "high" | "max" | Unrecognized<string>
```