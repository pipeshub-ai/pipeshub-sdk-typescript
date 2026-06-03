# AgentStreamSSEEventEvent

SSE event name.
See the enum for possible values.


## Example Usage

```typescript
import { AgentStreamSSEEventEvent } from "@pipeshub-ai/sdk/models";

let value: AgentStreamSSEEventEvent = "connected";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"connected" | "status" | "tool_calls" | "tool_call" | "tool_success" | "tool_error" | "tool_result" | "tool_execution_complete" | "answer_chunk" | "restreaming" | "metadata" | "complete" | "error" | Unrecognized<string>
```