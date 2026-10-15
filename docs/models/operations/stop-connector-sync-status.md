# StopConnectorSyncStatus

The status the connector is actually left in.

## Example Usage

```typescript
import { StopConnectorSyncStatus } from "@pipeshub-ai/sdk/models/operations";

let value: StopConnectorSyncStatus = "SYNCING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"IDLE" | "SYNCING" | "FULL_SYNCING" | "QUEUED" | "DELETING" | Unrecognized<string>
```