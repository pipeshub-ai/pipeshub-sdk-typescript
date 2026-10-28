# AgentCreateToolRef

## Example Usage

```typescript
import { AgentCreateToolRef } from "@pipeshub-ai/sdk/models";

let value: AgentCreateToolRef = {
  name: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | Surrounding whitespace is trimmed; a blank name is refused with `400`.  |
| `fullName`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | Surrounding whitespace is trimmed; a blank value is refused with `400`. |
| `description`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |