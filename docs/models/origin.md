# Origin

Source of the record:
- UPLOAD: Manually uploaded via API/UI
- CONNECTOR: Synced from external connector


## Example Usage

```typescript
import { Origin } from "@pipeshub-ai/sdk/models";

let value: Origin = "UPLOAD";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UPLOAD" | "CONNECTOR" | Unrecognized<string>
```