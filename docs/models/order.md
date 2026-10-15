# Order

Budgeted record reads only. `relevance` when `query` chose which blocks to show; the blocks are then not contiguous.

## Example Usage

```typescript
import { Order } from "@pipeshub-ai/sdk/models";

let value: Order = "relevance";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"in_order" | "relevance" | Unrecognized<string>
```