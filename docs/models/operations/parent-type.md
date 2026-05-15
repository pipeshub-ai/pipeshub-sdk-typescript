# ParentType

Type of the parent node whose children to retrieve.

Must be one of: `app`, `recordGroup`, `folder`, `record`.
Any other value returns a 400 error.


## Example Usage

```typescript
import { ParentType } from "@pipeshub-ai/sdk/models/operations";

let value: ParentType = "record";
```

## Values

```typescript
"app" | "recordGroup" | "folder" | "record"
```