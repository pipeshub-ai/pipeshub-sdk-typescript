# Confidence

AI confidence in the answer. Present only on `bot_response` messages, and only when the model emitted a trailing confidence block.

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