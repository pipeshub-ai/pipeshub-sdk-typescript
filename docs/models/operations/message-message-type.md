# MessageMessageType

## Example Usage

```typescript
import { MessageMessageType } from "@pipeshub-ai/sdk/models/operations";

let value: MessageMessageType = "system";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"user_query" | "bot_response" | "error" | "feedback" | "system" | "tool_call" | Unrecognized<string>
```