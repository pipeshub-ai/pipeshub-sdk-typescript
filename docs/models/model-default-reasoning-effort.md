# ModelDefaultReasoningEffort

The model's own reasoning effort, read from its stored configuration. It applies only when the chat request sets no `reasoningEffort` and the agent has no `defaultReasoningEffort`. Omitted when nothing valid is stored; `none` is a legacy value that runs as `low`.

## Example Usage

```typescript
import { ModelDefaultReasoningEffort } from "@pipeshub-ai/sdk/models";

let value: ModelDefaultReasoningEffort = "low";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "low" | "medium" | "high" | "max" | Unrecognized<string>
```