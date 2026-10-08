# Kind

Whether this account is a person who signs in (`human`) or a
machine identity that automation authenticates as (`service`).
Absent on records written before service accounts existed, which
are all human.


## Example Usage

```typescript
import { Kind } from "@pipeshub-ai/sdk/models";

let value: Kind = "human";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"human" | "service" | Unrecognized<string>
```