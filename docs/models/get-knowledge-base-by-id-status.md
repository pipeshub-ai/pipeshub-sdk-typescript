# GetKnowledgeBaseByIdStatus

`DELETING` while the knowledge base is being deleted: reads work, every write is refused with 409
(`error.code` `HTTP_KB_BEING_DELETED`), and deleting it again finishes the job. Otherwise its
processing state (`IDLE`, `QUEUED`, `SYNCING`, `FULL_SYNCING`), or null before it is first processed.


## Example Usage

```typescript
import { GetKnowledgeBaseByIdStatus } from "@pipeshub-ai/sdk/models";

let value: GetKnowledgeBaseByIdStatus = "IDLE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"IDLE" | "QUEUED" | "SYNCING" | "FULL_SYNCING" | "DELETING" | Unrecognized<string>
```