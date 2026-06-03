# AgentStreamSSEEvent

SSE event envelope for `POST /agents/{agentKey}/conversations/stream`.
Event names are listed in `event`; payload JSON is carried in `data`.


## Example Usage

```typescript
import { AgentStreamSSEEvent } from "@pipeshub-ai/sdk/models";

let value: AgentStreamSSEEvent = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `event`                                                                      | [models.AgentStreamSSEEventEvent](../models/agent-stream-sse-event-event.md) | :heavy_minus_sign:                                                           | SSE event name.<br/>See the enum for possible values.<br/>                   |
| `data`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | JSON-encoded event payload.<br/>Shape depends on `event`.<br/>               |