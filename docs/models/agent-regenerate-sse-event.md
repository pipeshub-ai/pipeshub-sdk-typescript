# AgentRegenerateSSEEvent

SSE event envelope for `POST /agents/{agentKey}/conversations/{conversationId}/message/{messageId}/regenerate`.

Stable events:

- `connected` confirms the stream is open.
- `complete` returns the updated conversation plus request metadata
  after the regenerated bot response is persisted.
- `error` returns a failure message. Conversation lookup failures,
  unauthorized conversation access, and regenerate rule failures such
  as "not the last message" are reported here after the stream starts.

Other events are forwarded from the agent backend and should be
treated as informational updates.


## Example Usage

```typescript
import { AgentRegenerateSSEEvent } from "@pipeshub-ai/sdk/models";

let value: AgentRegenerateSSEEvent = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `event`                                                                              | [models.AgentRegenerateSSEEventEvent](../models/agent-regenerate-sse-event-event.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `data`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | JSON-encoded event payload. Shape depends on `event`.                                |