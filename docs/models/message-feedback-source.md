# MessageFeedbackSource

Origin of the feedback. Always present in responses (server applies the default `user`).

## Example Usage

```typescript
import { MessageFeedbackSource } from "@pipeshub-ai/sdk/models";

let value: MessageFeedbackSource = "admin";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"user" | "system" | "admin" | "auto" | Unrecognized<string>
```