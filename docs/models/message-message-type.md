# MessageMessageType

Type of message:
- `user_query` - User's question or input
- `bot_response` - AI-generated response
- `error` - Error message from the system
- `feedback` - User feedback on a response
- `system` - System notification or status


## Example Usage

```typescript
import { MessageMessageType } from "@pipeshub-ai/sdk/models";

let value: MessageMessageType = "feedback";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"user_query" | "bot_response" | "error" | "feedback" | "system" | Unrecognized<string>
```