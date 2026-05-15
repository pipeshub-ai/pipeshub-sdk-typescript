# QueryParamSource

`owned` — owner list (`userId` filter only).
`shared` — explicit share grant list (`isShared` + `sharedWith`).
Defaults to `owned` when omitted.


## Example Usage

```typescript
import { QueryParamSource } from "@pipeshub-ai/sdk/models/operations";

let value: QueryParamSource = "shared";
```

## Values

```typescript
"owned" | "shared"
```