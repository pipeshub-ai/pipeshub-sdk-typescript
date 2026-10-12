# ProjectMembersUpsertRequest

## Example Usage

```typescript
import { ProjectMembersUpsertRequest } from "@pipeshub-ai/sdk/models";

let value: ProjectMembersUpsertRequest = {
  members: [],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `members`                                                                                                                                                            | [models.Member](../models/member.md)[]                                                                                                                               | :heavy_check_mark:                                                                                                                                                   | Upserted by `principalId`: existing members get their `role`<br/>updated, new ids are added. The project owner is silently<br/>skipped if included (ownership is implicit).<br/> |