# ConversationStreamRequestReasoningEffort

How hard a reasoning model should think for this turn. Saved in
the conversation's `modelInfo`.


## Example Usage

```typescript
import { ConversationStreamRequestReasoningEffort } from "@pipeshub-ai/sdk/models";

let value: ConversationStreamRequestReasoningEffort = "low";
```

## Values

```typescript
"none" | "low" | "medium" | "high" | "max"
```