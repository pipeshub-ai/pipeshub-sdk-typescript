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
    topics: [],
    subcategories1: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
    subcategories2: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
    subcategories3: [],
    departments: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
    categories: [],
  },
  permissions: [
    {
      id: "<id>",
      name: "<value>",
      type: "<value>",
      relationship: "READER",
      accessType: "<value>",
    },
  ],
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