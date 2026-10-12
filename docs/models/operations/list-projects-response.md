# ListProjectsResponse

Paginated project list

## Example Usage

```typescript
import { ListProjectsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ListProjectsResponse = {
  projects: [],
  pagination: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `projects`                                                                               | [models.ProjectListItem](../../models/project-list-item.md)[]                            | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pagination`                                                                             | [operations.ListProjectsPagination](../../models/operations/list-projects-pagination.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |