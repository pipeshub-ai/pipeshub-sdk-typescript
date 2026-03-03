# MessageType

Type of message:
<ul>
<li><code>user_query</code> - User's question or input</li>
<li><code>bot_response</code> - AI-generated response</li>
<li><code>error</code> - Error message from the system</li>
<li><code>feedback</code> - User feedback on a response</li>
<li><code>system</code> - System notification or status</li>
</ul>


## Example Usage

```typescript
import { MessageType } from "@pipeshub-ai/sdk/models";

let value: MessageType = "system";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"user_query" | "bot_response" | "error" | "feedback" | "system" | Unrecognized<string>
```