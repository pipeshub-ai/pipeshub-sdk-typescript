# ConversationStatus

Current status of the conversation:
<ul>
<li><code>INPROGRESS</code> - AI is processing</li>
<li><code>COMPLETED</code> - Response ready</li>
<li><code>FAILED</code> - Error occurred</li>
</ul>


## Example Usage

```typescript
import { ConversationStatus } from "@pipeshub-ai/sdk/models";

let value: ConversationStatus = "COMPLETED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"INPROGRESS" | "COMPLETED" | "FAILED" | Unrecognized<string>
```