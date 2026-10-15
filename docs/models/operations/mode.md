# Mode

`record` (default) reads this record. `thread` reads every record of the Slack thread this message belongs to, oldest first; a record outside any thread answers `422`.

## Example Usage

```typescript
import { Mode } from "@pipeshub-ai/sdk/models/operations";

let value: Mode = "thread";
```

## Values

```typescript
"record" | "thread"
```