# AgentCreateResponseSkill

A skill linked to the agent at creation time. Creating or updating an
agent only links edges to skills that already exist and never writes a
skill document, so only the name is echoed back here.


## Example Usage

```typescript
import { AgentCreateResponseSkill } from "@pipeshub-ai/sdk/models";

let value: AgentCreateResponseSkill = {
  name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |