# AgentListResponse

Paginated response returned by `GET /agents`.

The Node gateway forwards the Python backend response on success. If
the backend returns a non-200 response, the gateway still returns HTTP
200 with `success: true`, an empty `agents` array, and a zeroed
pagination block derived from the requested `page` / `limit`.


## Example Usage

```typescript
import { AgentListResponse } from "@pipeshub-ai/sdk/models";

let value: AgentListResponse = {
  success: true,
  agents: [
    {
      id: "agentInstances/e6f848ca-e2ab-4594-9925-e1136629f474",
      key: "e6f848ca-e2ab-4594-9925-e1136629f474",
      rev: "_lkNlcOm---",
      createdAtTimestamp: 349387,
      createdBy: "<value>",
      isActive: true,
      isDeleted: true,
      isServiceAccount: false,
      models: [],
      name: "<value>",
      tags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      updatedAtTimestamp: 439788,
      shareWithOrg: false,
      toolsets: [],
      knowledge: [
        {},
      ],
      canView: true,
      canShare: false,
      canEdit: true,
      canDelete: false,
      userRole: "OWNER",
      accessType: "INDIVIDUAL",
    },
  ],
  pagination: {
    currentPage: 1,
    limit: 20,
    totalItems: 2,
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `success`                                                        | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              | true                                                             |
| `agents`                                                         | [models.AgentListItem](../models/agent-list-item.md)[]           | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `pagination`                                                     | [models.AgentListPagination](../models/agent-list-pagination.md) | :heavy_check_mark:                                               | Pagination block returned by `GET /agents`.                      |                                                                  |