# UploadStreamSSEEventEvent

## Example Usage

```typescript
import { UploadStreamSSEEventEvent } from "@pipeshub-ai/sdk/models";

let value: UploadStreamSSEEventEvent = "done";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"file:succeeded" | "file:failed" | "done" | "error" | Unrecognized<string>
```