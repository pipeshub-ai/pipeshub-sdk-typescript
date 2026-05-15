# SemanticSearchGraphRecord

Graph record vertex returned in `records` and as values of `virtual_to_record_map`.
All listed fields are optional in the schema so partial or evolving documents validate; typical Arango documents
usually include `_key`, `_id`, `_rev`, `orgId`, `recordName`, `externalRecordId`, `recordType`, `origin`,
`createdAtTimestamp`, and `connectorId`. Extend this schema when new stable fields appear on Record vertices.


## Example Usage

```typescript
import { SemanticSearchGraphRecord } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchGraphRecord = {};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `key`                         | *string*                      | :heavy_minus_sign:            | N/A                           |
| `id`                          | *string*                      | :heavy_minus_sign:            | N/A                           |
| `rev`                         | *string*                      | :heavy_minus_sign:            | N/A                           |
| `recordName`                  | *string*                      | :heavy_minus_sign:            | N/A                           |
| `externalRecordId`            | *string*                      | :heavy_minus_sign:            | N/A                           |
| `recordType`                  | *string*                      | :heavy_minus_sign:            | N/A                           |
| `origin`                      | *string*                      | :heavy_minus_sign:            | N/A                           |
| `createdAtTimestamp`          | *number*                      | :heavy_minus_sign:            | N/A                           |
| `connectorId`                 | *string*                      | :heavy_minus_sign:            | N/A                           |
| `orgId`                       | *string*                      | :heavy_minus_sign:            | N/A                           |
| `updatedAtTimestamp`          | *number*                      | :heavy_minus_sign:            | N/A                           |
| `externalGroupId`             | *string*                      | :heavy_minus_sign:            | N/A                           |
| `externalParentId`            | *string*                      | :heavy_minus_sign:            | N/A                           |
| `externalRevisionId`          | *string*                      | :heavy_minus_sign:            | N/A                           |
| `externalRootGroupId`         | *string*                      | :heavy_minus_sign:            | N/A                           |
| `recordGroupId`               | *string*                      | :heavy_minus_sign:            | N/A                           |
| `version`                     | *number*                      | :heavy_minus_sign:            | N/A                           |
| `connectorName`               | *string*                      | :heavy_minus_sign:            | N/A                           |
| `mimeType`                    | *string*                      | :heavy_minus_sign:            | N/A                           |
| `webUrl`                      | *string*                      | :heavy_minus_sign:            | N/A                           |
| `lastSyncTimestamp`           | *number*                      | :heavy_minus_sign:            | N/A                           |
| `sourceCreatedAtTimestamp`    | *number*                      | :heavy_minus_sign:            | N/A                           |
| `sourceLastModifiedTimestamp` | *number*                      | :heavy_minus_sign:            | N/A                           |
| `isDeleted`                   | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `isArchived`                  | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `isVLMOcrProcessed`           | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `deletedByUserId`             | *string*                      | :heavy_minus_sign:            | N/A                           |
| `indexingStatus`              | *string*                      | :heavy_minus_sign:            | N/A                           |
| `extractionStatus`            | *string*                      | :heavy_minus_sign:            | N/A                           |
| `isLatestVersion`             | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `isDirty`                     | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `reason`                      | *string*                      | :heavy_minus_sign:            | N/A                           |
| `lastIndexTimestamp`          | *number*                      | :heavy_minus_sign:            | N/A                           |
| `lastExtractionTimestamp`     | *number*                      | :heavy_minus_sign:            | N/A                           |
| `summaryDocumentId`           | *string*                      | :heavy_minus_sign:            | N/A                           |
| `virtualRecordId`             | *string*                      | :heavy_minus_sign:            | N/A                           |
| `previewRenderable`           | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `isShared`                    | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `isDependentNode`             | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `parentNodeId`                | *string*                      | :heavy_minus_sign:            | N/A                           |
| `hideWeburl`                  | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `isInternal`                  | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `md5Checksum`                 | *string*                      | :heavy_minus_sign:            | N/A                           |
| `sizeInBytes`                 | *number*                      | :heavy_minus_sign:            | N/A                           |
| `definition`                  | *string*                      | :heavy_minus_sign:            | N/A                           |
| `sourceTables`                | *string*[]                    | :heavy_minus_sign:            | N/A                           |
| `rowCount`                    | *number*                      | :heavy_minus_sign:            | N/A                           |