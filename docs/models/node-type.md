# NodeType

Type of the node.

## Example Usage

```typescript
import { NodeType } from "@pipeshub-ai/sdk/models";

let value: NodeType = "recordGroup";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"app" | "recordGroup" | "folder" | "record" | Unrecognized<string>
```