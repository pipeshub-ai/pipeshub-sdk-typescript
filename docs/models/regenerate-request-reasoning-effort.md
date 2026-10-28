# RegenerateRequestReasoningEffort

Reasoning effort for this turn, for models that support it. Stored on
the conversation's model info and forwarded to the AI backend.


## Example Usage

```typescript
import { RegenerateRequestReasoningEffort } from "@pipeshub-ai/sdk/models";

let value: RegenerateRequestReasoningEffort = "none";
```

## Values

```typescript
"none" | "low" | "medium" | "high" | "max"
```