# Order

Budgeted record reads only. `relevance` when `query` chose which blocks to show; the blocks are then not contiguous. `extract` when `extract=true` was asked and the reader model answered: `content` is the passages it copied out (told to copy word for word; see `extract.unverifiedLines`), not a page of the record. An extract is one response, so `complete` is true and `nextStartBlock` null; whether the reader saw the whole record is `extract.sourceComplete`.

## Example Usage

```typescript
import { Order } from "@pipeshub-ai/sdk/models";

let value: Order = "relevance";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"in_order" | "relevance" | "extract" | Unrecognized<string>
```