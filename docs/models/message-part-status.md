# MessagePartStatus

## Example Usage

```typescript
import { MessagePartStatus } from "@pipeshub-ai/sdk/models";

let value: MessagePartStatus = "blocked";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"running" | "completed" | "failed" | "blocked" | Unrecognized<string>
```