# QueryParamSource

`owned` — owner list (`userId` filter only).
`shared` — explicit share grant list (`isShared` + `sharedWith`). Includes agent
conversations shared with the caller; those rows carry `agentKey`.
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