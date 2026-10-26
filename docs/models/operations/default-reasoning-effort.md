# DefaultReasoningEffort

The model's own reasoning effort. It applies only when the chat request sets no `reasoningEffort` and the agent has no `defaultReasoningEffort`; a level the user picks always wins. Read from `configuration.defaultReasoningEffort`, falling back to a top-level `defaultReasoningEffort`. Present on every model expanded from the entry, and left out when no default is stored. `none` is a legacy value that runs as `low`.

## Example Usage

```typescript
import { DefaultReasoningEffort } from "@pipeshub-ai/sdk/models/operations";

let value: DefaultReasoningEffort = "low";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "low" | "medium" | "high" | "max" | Unrecognized<string>
```