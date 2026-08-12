# AgentSkillAssignment

Reference to an existing skill assigned to an agent.

## Example Usage

```typescript
import { AgentSkillAssignment } from "@pipeshub-ai/sdk/models";

let value: AgentSkillAssignment = {
  name: "<value>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `name`                                                      | *string*                                                    | :heavy_check_mark:                                          | Lowercase skill name using single hyphens between segments. |