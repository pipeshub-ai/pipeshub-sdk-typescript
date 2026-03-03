# SelectedStrategy

Sync strategy: MANUAL (user-triggered), SCHEDULED (interval/cron), WEBHOOK (event-driven), REALTIME (WebSocket)

## Example Usage

```typescript
import { SelectedStrategy } from "@pipeshub-ai/sdk/models";

let value: SelectedStrategy = "REALTIME";
```

## Values

```typescript
"MANUAL" | "SCHEDULED" | "WEBHOOK" | "REALTIME"
```