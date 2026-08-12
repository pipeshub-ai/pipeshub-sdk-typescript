# GetConversationByIdMessageMessageType

## Example Usage

```typescript
import { GetConversationByIdMessageMessageType } from "@pipeshub-ai/sdk/models/operations";

let value: GetConversationByIdMessageMessageType = "tool_call";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"user_query" | "bot_response" | "error" | "feedback" | "system" | "tool_call" | Unrecognized<string>
```