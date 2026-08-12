# AgentCapabilities

Per-request agent capability toggles. Only meaningful when `chatMode`
selects an agent mode; ignored otherwise. Each field falls back to its
own `default` below when omitted — a missing flag is not uniformly
`true`. Omitting the whole object applies every default.


## Example Usage

```typescript
import { AgentCapabilities } from "@pipeshub-ai/sdk/models";

let value: AgentCapabilities = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `internalSearch`                                                          | *boolean*                                                                 | :heavy_minus_sign:                                                        | Whether the agent may search internal knowledge bases for this turn.      |
| `webSearch`                                                               | *boolean*                                                                 | :heavy_minus_sign:                                                        | Whether the agent may perform web search for this turn.                   |
| `deepSearch`                                                              | *boolean*                                                                 | :heavy_minus_sign:                                                        | Whether the agent may use deeper, higher-latency retrieval for this turn. |