# GetAgentConversationByIdMessageType

Filter messages by type. An empty value is read as not sent.

## Example Usage

```typescript
import { GetAgentConversationByIdMessageType } from "@pipeshub-ai/sdk/models/operations";

let value: GetAgentConversationByIdMessageType = "";
```

## Values

```typescript
"" | "user_query" | "bot_response" | "error" | "feedback" | "system"
```