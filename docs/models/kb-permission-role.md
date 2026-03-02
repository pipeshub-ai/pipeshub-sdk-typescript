# KBPermissionRole

## Example Usage

```typescript
import { KBPermissionRole } from "pipeshub/models";

let value: KBPermissionRole = "COMMENTER";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"OWNER" | "ORGANIZER" | "FILEORGANIZER" | "WRITER" | "COMMENTER" | "READER" | Unrecognized<string>
```