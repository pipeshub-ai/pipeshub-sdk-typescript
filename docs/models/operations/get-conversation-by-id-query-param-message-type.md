# GetConversationByIdQueryParamMessageType

Checked against the listed values (`400` otherwise) but not
applied: every message type is returned.


## Example Usage

```typescript
import { GetConversationByIdQueryParamMessageType } from "@pipeshub-ai/sdk/models/operations";

let value: GetConversationByIdQueryParamMessageType = "system";
```

## Values

```typescript
"user_query" | "bot_response" | "error" | "feedback" | "system" | "tool_call"
```