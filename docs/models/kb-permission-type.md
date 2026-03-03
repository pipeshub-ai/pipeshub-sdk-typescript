# KBPermissionType

Whether permission is for a user or team

## Example Usage

```typescript
import { KBPermissionType } from "@pipeshub-ai/sdk/models";

let value: KBPermissionType = "USER";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"USER" | "TEAM" | Unrecognized<string>
```