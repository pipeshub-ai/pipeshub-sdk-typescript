# Origin

Origin type.

## Example Usage

```typescript
import { Origin } from "@pipeshub-ai/sdk/models";

let value: Origin = "COLLECTION";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"COLLECTION" | "CONNECTOR" | Unrecognized<string>
```