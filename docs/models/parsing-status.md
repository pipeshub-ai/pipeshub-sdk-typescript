# ParsingStatus

Parse-phase status (ahead of indexing/extraction):
- NOT_STARTED: Awaiting parsing
- QUEUED: In parsing queue
- IN_PROGRESS: Currently being parsed
- COMPLETED: Successfully parsed
- FAILED: Parsing failed
- FILE_TYPE_NOT_SUPPORTED: Unsupported file format
- AUTO_INDEX_OFF: Auto-indexing disabled for this record
- EMPTY: File has no extractable content


## Example Usage

```typescript
import { ParsingStatus } from "@pipeshub-ai/sdk/models";

let value: ParsingStatus = "COMPLETED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"NOT_STARTED" | "IN_PROGRESS" | "FAILED" | "COMPLETED" | "FILE_TYPE_NOT_SUPPORTED" | "AUTO_INDEX_OFF" | "EMPTY" | "QUEUED" | Unrecognized<string>
```