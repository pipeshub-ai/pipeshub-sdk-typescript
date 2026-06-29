# IndexingStatus

Current indexing/processing status:
- NOT_STARTED: Awaiting indexing
- QUEUED: In indexing queue
- IN_PROGRESS: Currently being indexed
- COMPLETED: Successfully indexed and searchable
- FAILED: Indexing failed (check error details)
- PAUSED: Indexing paused by user
- FILE_TYPE_NOT_SUPPORTED: Unsupported file format
- AUTO_INDEX_OFF: Auto-indexing disabled for this record
- EMPTY: File has no extractable content
- ENABLE_MULTIMODAL_MODELS: Requires multimodal AI models


## Example Usage

```typescript
import { IndexingStatus } from "@pipeshub-ai/sdk/models";

let value: IndexingStatus = "COMPLETED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"NOT_STARTED" | "PAUSED" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "FILE_TYPE_NOT_SUPPORTED" | "AUTO_INDEX_OFF" | "EMPTY" | "ENABLE_MULTIMODAL_MODELS" | "QUEUED" | Unrecognized<string>
```