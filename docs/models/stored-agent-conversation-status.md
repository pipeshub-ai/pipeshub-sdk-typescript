# StoredAgentConversationStatus

## Example Usage

```typescript
import { StoredAgentConversationStatus } from "@pipeshub-ai/sdk/models";

let value: StoredAgentConversationStatus = "None";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"None" | "Inprogress" | "Complete" | "Failed" | Unrecognized<string>
```