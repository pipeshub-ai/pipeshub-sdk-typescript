# GetConversationByIdSharedEnum

Filters on the conversation's `isShared`; a conversation that
does not match is answered `404`. Read case-insensitively;
any other value is refused with `400`.


## Example Usage

```typescript
import { GetConversationByIdSharedEnum } from "@pipeshub-ai/sdk/models/operations";

let value: GetConversationByIdSharedEnum = "true";
```

## Values

```typescript
"true" | "false" | "1" | "0"
```