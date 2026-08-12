# AgentRegenerateSSEEventEvent

## Example Usage

```typescript
import { AgentRegenerateSSEEventEvent } from "@pipeshub-ai/sdk/models";

let value: AgentRegenerateSSEEventEvent = "TOOL_CALL_END";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"RUN_STARTED" | "RUN_FINISHED" | "RUN_ERROR" | "STEP_STARTED" | "STEP_FINISHED" | "TEXT_MESSAGE_START" | "TEXT_MESSAGE_CONTENT" | "TEXT_MESSAGE_END" | "REASONING_START" | "REASONING_MESSAGE_START" | "REASONING_MESSAGE_CONTENT" | "REASONING_MESSAGE_END" | "REASONING_END" | "TOOL_CALL_START" | "TOOL_CALL_ARGS" | "TOOL_CALL_END" | "TOOL_CALL_RESULT" | "STATE_DELTA" | "STATE_SNAPSHOT" | "CUSTOM" | "HEARTBEAT" | Unrecognized<string>
```