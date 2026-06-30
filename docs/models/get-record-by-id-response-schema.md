# GetRecordByIdResponseSchema

Response returned by GET /knowledgeBase/record/{recordId}.

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
    isLatestVersion: true,
    createdAtTimestamp: 59981,
    updatedAtTimestamp: 47414,
    sourceCreatedAtTimestamp: 297926,
    sourceLastModifiedTimestamp: 243957,
    lastSyncTimestamp: 359784,
    indexingStatus: "<value>",
    extractionStatus: "<value>",
    isDeleted: true,
    isArchived: true,
    isDirty: true,
    isVLMOcrProcessed: true,
    mimeType: "<value>",
    sizeInBytes: 29403,
    webUrl: "https://helpful-tail.biz/",
    fileRecord: {
      id: "<id>",
      orgId: "<id>",
      name: "<value>",
      extension: "wav",
      mimeType: "<value>",
      sizeInBytes: 793910,
      isFile: false,
      webUrl: "https://milky-term.net/",
    },
    mailRecord: {},
    ticketRecord: {},
  },
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
    languages: [],
    topics: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
    subcategories1: [],
    subcategories2: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
    subcategories3: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
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
  permissions: [],
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `record`                                                                                                        | [models.GetRecordByIdResponseSchemaRecord](../models/get-record-by-id-response-schema-record.md)                | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `knowledgeBase`                                                                                                 | [models.GetRecordByIdResponseSchemaKnowledgeBase](../models/get-record-by-id-response-schema-knowledge-base.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `folder`                                                                                                        | [models.GetRecordByIdResponseSchemaFolder](../models/get-record-by-id-response-schema-folder.md)                | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `metadata`                                                                                                      | [models.GetRecordByIdResponseSchemaMetadata](../models/get-record-by-id-response-schema-metadata.md)            | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `permissions`                                                                                                   | [models.GetRecordByIdResponseSchemaPermission](../models/get-record-by-id-response-schema-permission.md)[]      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |