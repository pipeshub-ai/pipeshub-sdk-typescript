# MessagePartType

## Example Usage

```typescript
import { MessagePartType } from "@pipeshub-ai/sdk/models";

let value: MessagePartType = "sub_agent";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "reasoning" | "tool_call" | "sub_agent" | Unrecognized<string>
```