# NodeType

Type of the node (app, recordGroup, folder, or record).

## Example Usage

```typescript
import { NodeType } from "@pipeshub-ai/sdk/models";

let value: NodeType = "recordGroup";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"app" | "recordGroup" | "folder" | "record" | Unrecognized<string>
```