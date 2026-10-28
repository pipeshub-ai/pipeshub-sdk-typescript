# CreateConversationRequestChatMode

Optional execution mode for non-stream consumers of this shared
request schema. `deep`, `quick`, `verification` and `auto` are
legacy values: still accepted, they run as `internal_search`.
The streaming routes accept only `agent`, `internal_search` and
`web_search`. `agent:<mode>` is refused.
`agent` uses the universal agent loop, while `internal_search`
and `web_search` use their corresponding assistant search paths.


## Example Usage

```typescript
import { CreateConversationRequestChatMode } from "@pipeshub-ai/sdk/models";

let value: CreateConversationRequestChatMode = "internal_search";
```

## Values

```typescript
"agent" | "internal_search" | "web_search" | "deep" | "quick" | "verification" | "auto"
```