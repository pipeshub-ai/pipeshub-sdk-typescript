# GetAllKnowledgeBaseResponseSchemaStatus

The knowledge base's processing state. `DELETING` while it is being deleted (writes are
refused with 409). `IDLE`, `QUEUED`, `SYNCING` or `FULL_SYNCING` otherwise, or null on a
knowledge base that has not been processed yet.


## Example Usage

```typescript
import { GetAllKnowledgeBaseResponseSchemaStatus } from "@pipeshub-ai/sdk/models";

let value: GetAllKnowledgeBaseResponseSchemaStatus = "FULL_SYNCING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"IDLE" | "QUEUED" | "SYNCING" | "FULL_SYNCING" | "DELETING" | Unrecognized<string>
```