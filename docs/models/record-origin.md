# RecordOrigin

Source of the record:
- UPLOAD: Manually uploaded via API/UI
- CONNECTOR: Synced from external connector


## Example Usage

```typescript
import { RecordOrigin } from "@pipeshub-ai/sdk/models";

let value: RecordOrigin = "UPLOAD";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"UPLOAD" | "CONNECTOR" | Unrecognized<string>
```