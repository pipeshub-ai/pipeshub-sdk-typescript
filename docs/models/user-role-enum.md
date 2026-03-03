# UserRoleEnum

User's role in this knowledge base

## Example Usage

```typescript
import { UserRoleEnum } from "@pipeshub-ai/sdk/models";

let value: UserRoleEnum = "FILEORGANIZER";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"OWNER" | "ORGANIZER" | "FILEORGANIZER" | "WRITER" | "COMMENTER" | "READER" | Unrecognized<string>
```