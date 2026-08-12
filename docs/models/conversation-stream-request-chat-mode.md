# ConversationStreamRequestChatMode

Optional execution mode for non-stream consumers of this shared
request schema.
`agent` uses the universal agent loop, while `internal_search`
and `web_search` use their corresponding assistant search paths.


## Example Usage

```typescript
import { ConversationStreamRequestChatMode } from "@pipeshub-ai/sdk/models";

let value: ConversationStreamRequestChatMode = "internal_search";
```

## Values

```typescript
"agent" | "internal_search" | "web_search"
```