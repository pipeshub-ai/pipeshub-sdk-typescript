# RecordsResponse

Paginated response for records listing

## Example Usage

```typescript
import { RecordsResponse } from "pipeshub/models";

let value: RecordsResponse = {
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `records`                                                              | [models.RecordT](../models/record-t.md)[]                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `pagination`                                                           | [models.PaginationInfo](../models/pagination-info.md)                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `filters`                                                              | [models.RecordsResponseFilters](../models/records-response-filters.md) | :heavy_minus_sign:                                                     | N/A                                                                    |