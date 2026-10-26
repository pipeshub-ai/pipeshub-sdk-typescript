# StageStateSummary

Status of one pipeline stage (e.g. `classify`) for the record's current
content revision.


## Example Usage

```typescript
import { StageStateSummary } from "@pipeshub-ai/sdk/models";

let value: StageStateSummary = {
  stage: "classify",
  status: "COMPLETED",
  reason: "<value>",
  attempt: 210936,
  startedAtMs: null,
  finishedAtMs: 85175,
  updatedAtMs: 943941,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `stage`                                               | *string*                                              | :heavy_check_mark:                                    | Pipeline stage name.                                  | classify                                              |
| `status`                                              | *string*                                              | :heavy_check_mark:                                    | Stage status (same values as `indexingStatus`).       | COMPLETED                                             |
| `reason`                                              | *string*                                              | :heavy_check_mark:                                    | Failure or skip reason, when there is one.            |                                                       |
| `attempt`                                             | *number*                                              | :heavy_check_mark:                                    | Number of times this stage has run for this revision. |                                                       |
| `startedAtMs`                                         | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |                                                       |
| `finishedAtMs`                                        | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |                                                       |
| `updatedAtMs`                                         | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |                                                       |