# Confidence

## Example Usage

```typescript
import { Confidence } from "@pipeshub-ai/sdk/models";

let value: Confidence = "Low";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Very High" | "High" | "Medium" | "Low" | "Unknown" | Unrecognized<string>
```