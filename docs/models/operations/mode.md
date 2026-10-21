# Mode

`record` (default) reads this record. `thread` reads every record of the Slack thread this message belongs to, oldest first. A Slack record in no single thread reads as itself, then the threads its messages started (at most 10). A record that is not from Slack answers `422`.

## Example Usage

```typescript
import { Mode } from "@pipeshub-ai/sdk/models/operations";

let value: Mode = "thread";
```

## Values

```typescript
"record" | "thread"
```