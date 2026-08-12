# AgentSkill

A skill linked to the agent, as returned by the agent detail graph
projection. Flat by design — a skill carries no sub-entities analogous
to a toolset's tools. Fields other than `name` are read straight off
the skill document and are null when unset.


## Example Usage

```typescript
import { AgentSkill } from "@pipeshub-ai/sdk/models";

let value: AgentSkill = {
  name: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Unique skill name, used to reference the skill on agent create/update. |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `category`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `subcategory`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `version`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `status`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | Lifecycle state of the skill — `active` or `deprecated`.               |