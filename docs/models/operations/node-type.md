# NodeType

## Example Usage

```typescript
import { NodeType } from "pipeshub/models/operations";

let value: NodeType = "record";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"kb" | "folder" | "record" | "connector" | "app" | Unrecognized<string>
```