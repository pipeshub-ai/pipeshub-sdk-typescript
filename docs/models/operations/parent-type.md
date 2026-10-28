# ParentType

Type of the parent node whose children to retrieve.

Must be one of: `app`, `recordGroup`, `folder`, `record` (case-sensitive).
Any other value returns a 400 error, and so does a type that does not
match what `parentId` is (for example `folder` with a knowledge base id).


## Example Usage

```typescript
import { ParentType } from "@pipeshub-ai/sdk/models/operations";

let value: ParentType = "record";
```

## Values

```typescript
"app" | "recordGroup" | "folder" | "record"
```