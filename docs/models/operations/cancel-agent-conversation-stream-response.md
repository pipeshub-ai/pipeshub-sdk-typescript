# CancelAgentConversationStreamResponse

Cancellation requested, or the run had already finished.

## Example Usage

```typescript
import { CancelAgentConversationStreamResponse } from "@pipeshub-ai/sdk/models/operations";

let value: CancelAgentConversationStreamResponse = {
  cancelled: false,
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cancelled`                                                                                                                                         | *boolean*                                                                                                                                           | :heavy_check_mark:                                                                                                                                  | `true` when a stop request was issued for `runId`; `false` when the run is unknown to an in-process registry or the request could not be published. |