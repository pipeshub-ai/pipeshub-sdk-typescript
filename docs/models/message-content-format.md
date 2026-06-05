# MessageContentFormat

Format of the content for rendering

## Example Usage

```typescript
import { MessageContentFormat } from "@pipeshub-ai/sdk/models";

let value: MessageContentFormat = "JSON";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"MARKDOWN" | "JSON" | "HTML" | Unrecognized<string>
```