# ParentNodeType

Parent node type; opened as `/nodes/{nodeType}/{id}`.

## Example Usage

```typescript
import { ParentNodeType } from "@pipeshub-ai/sdk/models";

let value: ParentNodeType = "record";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"app" | "recordGroup" | "folder" | "record" | Unrecognized<string>
```