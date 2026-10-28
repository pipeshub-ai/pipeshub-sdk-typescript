# PermissionModel

How records of this connector get their per-user visibility:
`RECORD_LEVEL` (per-record permissions from the source) or
`APP_LEVEL` (everyone who can reach the connector sees every record).


## Example Usage

```typescript
import { PermissionModel } from "@pipeshub-ai/sdk/models";

let value: PermissionModel = "RECORD_LEVEL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"RECORD_LEVEL" | "APP_LEVEL" | Unrecognized<string>
```