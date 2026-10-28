# ListOAuthAppsStatus

Filter by status. `revoked` always yields an empty page, because an app only becomes revoked by being deleted and deleted apps are never listed.

## Example Usage

```typescript
import { ListOAuthAppsStatus } from "@pipeshub-ai/sdk/models/operations";

let value: ListOAuthAppsStatus = "revoked";
```

## Values

```typescript
"active" | "suspended" | "revoked"
```