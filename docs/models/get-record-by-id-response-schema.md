# GetRecordByIdResponseSchema

Response returned by GET /knowledgeBase/record/{recordId}.

For a connected app with a limit, a collection or folder the limit
leaves out is not named: `knowledgeBase` and `folder` are `null` for
it, as are the record's own `recordGroupId` (with `externalGroupId`),
`rootRecordGroupId` and `parentNodeId` (with `externalParentId`).
`externalParentId` is also `null` when there is no `parentNodeId` to
check it by, unless the limit covers the record's whole app.
`fileRecord.path` is `null` unless the limit covers the whole app or
collection; `webUrl` is kept.


## Example Usage

```typescript
import { GetRecordByIdResponseSchema } from "@pipeshub-ai/sdk/models";

let value: GetRecordByIdResponseSchema = {
  record: {
    id: "<id>",
    orgId: "<id>",
    recordName: "<value>",
    externalRecordId: "<id>",
    connectorId: "<id>",
    connectorName: "DRIVE",
    recordType: "FILE",
    origin: "<value>",
    version: 235229,
    createdAtTimestamp: 392551,
    updatedAtTimestamp: 59981,
    sourceCreatedAtTimestamp: 47414,
    sourceLastModifiedTimestamp: 297926,
    indexingStatus: "<value>",
    extractionStatus: "<value>",
    isDeleted: true,
    isArchived: true,
    isVLMOcrProcessed: true,
    mimeType: "<value>",
    sizeInBytes: null,
    contentRev: "78f3f276290c9f81",
    webUrl: null,
    fileRecord: {
      id: "<id>",
      orgId: "<id>",
      name: "<value>",
      extension: "m1v",
      isFile: true,
    },
    mailRecord: {},
    ticketRecord: {},
  },
  stageStates: [
    {
      stage: "classify",
      status: "COMPLETED",
      reason: "<value>",
      attempt: 290128,
      startedAtMs: 174147,
      finishedAtMs: 764239,
      updatedAtMs: 939490,
    },
  ],
  knowledgeBase: {
    id: "<id>",
    name: "<value>",
    orgId: "<id>",
  },
  folder: {
    id: "<id>",
    name: "<value>",
  },
  metadata: {
    languages: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
    topics: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
    subcategories1: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
    subcategories2: [],
    subcategories3: [],
    departments: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
    categories: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
  },
  permissions: [
    {
      id: "<id>",
      name: "<value>",
      type: "<value>",
      relationship: "OWNER",
      accessType: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `record`                                                                                                                                                                                                | [models.GetRecordByIdResponseSchemaRecord](../models/get-record-by-id-response-schema-record.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |
| `stageStates`                                                                                                                                                                                           | [models.StageStateSummary](../models/stage-state-summary.md)[]                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                      | Per-stage pipeline status for the record's current content revision.<br/>Empty for records indexed before pipeline stages existed. The<br/>`classify` stage's status is mirrored on `record.extractionStatus`.<br/> |
| `knowledgeBase`                                                                                                                                                                                         | [models.GetRecordByIdResponseSchemaKnowledgeBase](../models/get-record-by-id-response-schema-knowledge-base.md)                                                                                         | :heavy_check_mark:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |
| `folder`                                                                                                                                                                                                | [models.GetRecordByIdResponseSchemaFolder](../models/get-record-by-id-response-schema-folder.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |
| `metadata`                                                                                                                                                                                              | [models.GetRecordByIdResponseSchemaMetadata](../models/get-record-by-id-response-schema-metadata.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |
| `permissions`                                                                                                                                                                                           | [models.GetRecordByIdResponseSchemaPermission](../models/get-record-by-id-response-schema-permission.md)[]                                                                                              | :heavy_check_mark:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |