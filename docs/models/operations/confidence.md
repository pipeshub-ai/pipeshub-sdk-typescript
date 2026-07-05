# Confidence

AI confidence in the answer. Present only on `bot_response` messages, and only when the model emitted a trailing confidence block.

This field is now optional and nullable; it was previously always present and non-nullable. Treat a missing or `null` value as "no confidence reported" and guard before using it. Change effective in SDK v1.2.0 (v1.1.0 and earlier always populated it).


## Example Usage

```typescript
import { Confidence } from "@pipeshub-ai/sdk/models/operations";

let value: Confidence = "Low";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Very High" | "High" | "Medium" | "Low" | "Unknown" | Unrecognized<string>
```