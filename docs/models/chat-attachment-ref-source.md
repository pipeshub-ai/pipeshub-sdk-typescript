# ChatAttachmentRefSource

How the attachment was produced: a file upload, or text pasted into the
composer and sent as a file. Stored on the saved message as sent.


## Example Usage

```typescript
import { ChatAttachmentRefSource } from "@pipeshub-ai/sdk/models";

let value: ChatAttachmentRefSource = "paste-text";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"upload" | "paste-text" | Unrecognized<string>
```