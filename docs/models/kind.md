# Kind

Whether this account is a person who signs in (`human`) or a
machine identity that automation authenticates as (`service`).
Absent on records written before service accounts existed, which
are all human.


## Example Usage

```typescript
import { Kind } from "@pipeshub-ai/sdk/models";

let value: Kind = "human";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"human" | "service" | Unrecognized<string>
```