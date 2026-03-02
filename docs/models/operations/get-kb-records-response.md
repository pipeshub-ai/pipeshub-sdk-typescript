# GetKBRecordsResponse

Successful operation

## Example Usage

```typescript
import { GetKBRecordsResponse } from "pipeshub/models/operations";

let value: GetKBRecordsResponse = {
  records: [
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      recordName: "Q4 Financial Report.pdf",
      externalRecordId: "507f1f77bcf86cd799439011",
      recordType: "FILE",
      origin: "UPLOAD",
      connectorId: "conn_123456",
      connectorName: "GOOGLE_DRIVE",
      orgId: "org_abc123",
      kbId: "kb_xyz789",
      folderId: "folder_456",
      version: 3,
      createdAtTimestamp: 1704153600000,
      updatedAtTimestamp: 1704240000000,
      indexingStatus: "COMPLETED",
      webUrl: "https://drive.google.com/file/d/abc123",
      mimeType: "application/pdf",
      sizeInBytes: 1048576,
      extension: "pdf",
      type: "record",
      ticketRecord: {},
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `success`                                                                                              | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `container`                                                                                            | [operations.GetKBRecordsContainer](../../models/operations/get-kb-records-container.md)                | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `folders`                                                                                              | [models.Folder](../../models/folder.md)[]                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `records`                                                                                              | [models.RecordT](../../models/record-t.md)[]                                                           | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `level`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `totalCount`                                                                                           | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `counts`                                                                                               | [operations.GetKBRecordsCounts](../../models/operations/get-kb-records-counts.md)                      | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `availableFilters`                                                                                     | [operations.GetKBRecordsAvailableFilters](../../models/operations/get-kb-records-available-filters.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `paginationMode`                                                                                       | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `userPermission`                                                                                       | [operations.GetKBRecordsUserPermission](../../models/operations/get-kb-records-user-permission.md)     | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `pagination`                                                                                           | [operations.GetKBRecordsPagination](../../models/operations/get-kb-records-pagination.md)              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `filters`                                                                                              | [operations.GetKBRecordsFilters](../../models/operations/get-kb-records-filters.md)                    | :heavy_minus_sign:                                                                                     | Applied and available filters                                                                          |