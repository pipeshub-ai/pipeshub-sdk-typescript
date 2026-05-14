# AssistantStreamSSEEventEvent

## Example Usage

```typescript
import { AssistantStreamSSEEventEvent } from "@pipeshub-ai/sdk/models";

let value: AssistantStreamSSEEventEvent = "complete";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"connected" | "status" | "answer_chunk" | "tool_calls" | "tool_call" | "tool_success" | "tool_error" | "restreaming" | "complete" | "error" | Unrecognized<string>
```