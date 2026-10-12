# UpsertProjectMembersRequest

## Example Usage

```typescript
import { UpsertProjectMembersRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpsertProjectMembersRequest = {
  projectId: "<value>",
  body: {
    members: [
      {
        principalId: "<value>",
        role: "viewer",
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `projectId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `body`                                                                               | [models.ProjectMembersUpsertRequest](../../models/project-members-upsert-request.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |