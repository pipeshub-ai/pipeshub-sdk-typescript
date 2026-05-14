# Filters

App connector instance ids and knowledge-base / record-group ids that narrow retrieval
for a turn. For **org assistant** chat streams, send explicit `apps` / `kb` lists.
For **agent** chat streams, send explicit id lists, or **omit** `filters` (and `tools`)
to let the service use the agent’s stored knowledge and tool configuration. Sending
`{ "apps": [], "kb": [] }` on an agent stream means **no** knowledge sources for that
turn (it is not “full org default”).


## Example Usage

```typescript
import { Filters } from "@pipeshub-ai/sdk/models";

let value: Filters = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `apps`                                       | *string*[]                                   | :heavy_minus_sign:                           | Filter by application connector instance IDs |
| `kb`                                         | *string*[]                                   | :heavy_minus_sign:                           | Filter by knowledge base IDs                 |