# UserGroupType

Group type:
- admin: System admin group (cannot be modified)
- standard: Default user group
- everyone: All users group (cannot be modified)
- custom: User-created custom group


## Example Usage

```typescript
import { UserGroupType } from "@pipeshub-ai/sdk/models";

let value: UserGroupType = "admin";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"admin" | "standard" | "everyone" | "custom" | Unrecognized<string>
```