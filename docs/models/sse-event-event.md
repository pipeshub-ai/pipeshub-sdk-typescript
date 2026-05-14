# SSEEventEvent

## Example Usage

```typescript
import { SSEEventEvent } from "@pipeshub-ai/sdk/models";

let value: SSEEventEvent = "answer_chunk";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"connected" | "status" | "answer_chunk" | "tool_call" | "tool_calls" | "tool_result" | "tool_success" | "tool_error" | "tool_execution_complete" | "restreaming" | "metadata" | "complete" | "error" | Unrecognized<string>
```