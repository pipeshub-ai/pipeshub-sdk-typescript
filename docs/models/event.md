# Event

## Example Usage

```typescript
import { Event } from "@pipeshub-ai/sdk/models";

let value: Event = "connected";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"connected" | "chunk" | "citation" | "complete" | "error" | Unrecognized<string>
```