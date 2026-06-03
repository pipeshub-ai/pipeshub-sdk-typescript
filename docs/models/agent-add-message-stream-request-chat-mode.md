# AgentAddMessageStreamRequestChatMode

Chat mode hint forwarded to the agent backend. Defaults to `auto`
in the upstream AI payload when omitted.
- `auto` lets the agent pick its default strategy.
- `quick` favors low-latency answers over depth.
- `verification` runs additional grounding/verification passes.
- `deep` performs deeper retrieval and reasoning.


## Example Usage

```typescript
import { AgentAddMessageStreamRequestChatMode } from "@pipeshub-ai/sdk/models";

let value: AgentAddMessageStreamRequestChatMode = "quick";
```

## Values

```typescript
"auto" | "quick" | "verification" | "deep"
```