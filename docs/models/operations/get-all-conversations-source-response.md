# GetAllConversationsSourceResponse

Echoes the requested `source` query value.

## Example Usage

```typescript
import { GetAllConversationsSourceResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetAllConversationsSourceResponse = "shared";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"owned" | "shared" | Unrecognized<string>
```