# LastSyncOutcome

How the last sync run ended

## Example Usage

```typescript
import { LastSyncOutcome } from "@pipeshub-ai/sdk/models";

let value: LastSyncOutcome = "failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"succeeded" | "failed" | "stopped" | "skipped" | Unrecognized<string>
```