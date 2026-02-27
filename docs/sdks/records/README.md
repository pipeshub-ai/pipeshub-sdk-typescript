# Records

## Overview

Record management and operations

### Available Operations

* [getAllRecords](#getallrecords) - Get all records across knowledge bases
* [getKBRecords](#getkbrecords) - Get records for a knowledge base
* [getKBChildren](#getkbchildren) - Get KB children (alias for records)
* [getRecordById](#getrecordbyid) - Get record by ID
* [updateRecord](#updaterecord) - Update record
* [deleteRecord](#deleterecord) - Delete record
* [streamRecordBuffer](#streamrecordbuffer) - Stream record content

## getAllRecords

Retrieve records from all knowledge bases accessible to the user.<br><br>
<b>Overview:</b><br>
Search and filter records across your entire organization. Useful for global search, reporting, and cross-KB content discovery.<br><br>
<b>Filtering Options:</b><br>
<ul>
<li><b>search:</b> Full-text search in record names</li>
<li><b>recordTypes:</b> FILE, WEBPAGE, EMAIL, MESSAGE, TICKET, etc.</li>
<li><b>origins:</b> UPLOAD or CONNECTOR</li>
<li><b>connectors:</b> Filter by connector source</li>
<li><b>indexingStatus:</b> COMPLETED, FAILED, IN_PROGRESS, etc.</li>
<li><b>dateFrom/dateTo:</b> Filter by creation date range</li>
</ul>
<b>Response Includes:</b><br>
<ul>
<li>Paginated record list</li>
<li>Applied and available filter counts</li>
<li>Pagination metadata</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAllRecords" method="get" path="/knowledgeBase/records" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.records.getAllRecords({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    recordTypes: "FILE,WEBPAGE,EMAIL",
    connectors: "GOOGLE_DRIVE,ONEDRIVE",
    indexingStatus: "COMPLETED,FAILED",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { recordsGetAllRecords } from "pipeshub/funcs/records-get-all-records.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await recordsGetAllRecords(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    recordTypes: "FILE,WEBPAGE,EMAIL",
    connectors: "GOOGLE_DRIVE,ONEDRIVE",
    indexingStatus: "COMPLETED,FAILED",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordsGetAllRecords failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllRecordsRequest](../../models/operations/get-all-records-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetAllRecordsSecurity](../../models/operations/get-all-records-security.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RecordsResponse](../../models/records-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getKBRecords

Retrieve a paginated list of records within a specific knowledge base.<br><br>
<b>Overview:</b><br>
Returns all records (documents, files, content) stored in the specified KB, with powerful filtering and sorting capabilities.<br><br>
<b>Filtering:</b><br>
<ul>
<li><b>search:</b> Search by record name (partial match, max 1000 chars)</li>
<li><b>recordTypes:</b> FILE, WEBPAGE, COMMENT, MESSAGE, EMAIL, TICKET</li>
<li><b>origins:</b> UPLOAD (manual uploads) or CONNECTOR (synced)</li>
<li><b>indexingStatus:</b> Filter by processing state</li>
<li><b>dateFrom/dateTo:</b> Creation date range (Unix timestamps)</li>
</ul>
<b>Sorting:</b><br>
Default sorts by <code>createdAtTimestamp</code> descending (newest first).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getKBRecords" method="get" path="/knowledgeBase/{kbId}/records" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.records.getKBRecords({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    kbId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { recordsGetKBRecords } from "pipeshub/funcs/records-get-kb-records.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await recordsGetKBRecords(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    kbId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordsGetKBRecords failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetKBRecordsRequest](../../models/operations/get-kb-records-request.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetKBRecordsSecurity](../../models/operations/get-kb-records-security.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RecordsResponse](../../models/records-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getKBChildren

Retrieve a paginated list of children (folders and records) within a specific knowledge base.<br><br>
<b>Overview:</b><br>
This is an alias endpoint for <code>/knowledgeBase/{kbId}/records</code>. It returns all direct children of the KB root, including both folders and records.<br><br>
<b>Filtering:</b><br>
<ul>
<li><b>search:</b> Search by record name (partial match, max 1000 chars)</li>
<li><b>recordTypes:</b> FILE, WEBPAGE, COMMENT, MESSAGE, EMAIL, TICKET</li>
<li><b>origins:</b> UPLOAD (manual uploads) or CONNECTOR (synced)</li>
<li><b>indexingStatus:</b> Filter by processing state</li>
<li><b>dateFrom/dateTo:</b> Creation date range (Unix timestamps)</li>
</ul>
<b>Sorting:</b><br>
Default sorts by <code>createdAtTimestamp</code> descending (newest first).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getKBChildren" method="get" path="/knowledgeBase/{kbId}/children" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.records.getKBChildren({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    kbId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { recordsGetKBChildren } from "pipeshub/funcs/records-get-kb-children.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await recordsGetKBChildren(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    kbId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordsGetKBChildren failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetKBChildrenRequest](../../models/operations/get-kb-children-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetKBChildrenSecurity](../../models/operations/get-kb-children-security.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RecordsResponse](../../models/records-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getRecordById

Retrieve detailed information about a specific record.<br><br>
<b>Overview:</b><br>
Returns complete record metadata including name, type, indexing status, storage information, and version history.<br><br>
<b>File Conversion:</b><br>
Use the optional <code>convertTo</code> parameter to request file format conversion (e.g., PDF to text).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRecordById" method="get" path="/knowledgeBase/record/{recordId}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.records.getRecordById({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    recordId: "<id>",
    convertTo: "txt",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { recordsGetRecordById } from "pipeshub/funcs/records-get-record-by-id.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await recordsGetRecordById(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    recordId: "<id>",
    convertTo: "txt",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordsGetRecordById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRecordByIdRequest](../../models/operations/get-record-by-id-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetRecordByIdSecurity](../../models/operations/get-record-by-id-security.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RecordT](../../models/record-t.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateRecord

Update a record's name and/or file content.<br><br>
<b>Overview:</b><br>
Allows updating the display name and optionally replacing the file content. Triggers re-indexing when content changes.<br><br>
<b>Required Permission:</b> WRITER or higher<br><br>
<b>Updating File Content:</b><br>
Include a new file in the request to replace the existing content. The file extension must match the original.<br><br>
<b>Side Effects:</b><br>
<ul>
<li>Updates <code>updatedAtTimestamp</code></li>
<li>Increments version if file content changed</li>
<li>Triggers re-indexing for content changes</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateRecord" method="put" path="/knowledgeBase/record/{recordId}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await pipeshub.records.updateRecord({
    recordId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { recordsUpdateRecord } from "pipeshub/funcs/records-update-record.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await recordsUpdateRecord(pipeshub, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordsUpdateRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRecordRequest](../../models/operations/update-record-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateRecordResponse](../../models/operations/update-record-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteRecord

Permanently delete a record from the knowledge base.<br><br>
<b>Required Permission:</b> WRITER or higher<br><br>
<b>What Gets Deleted:</b><br>
<ul>
<li>Record metadata</li>
<li>Associated storage file</li>
<li>Indexed content and embeddings</li>
</ul>
<b>Warning:</b> This action is irreversible.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteRecord" method="delete" path="/knowledgeBase/record/{recordId}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  await pipeshub.records.deleteRecord({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    recordId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { recordsDeleteRecord } from "pipeshub/funcs/records-delete-record.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await recordsDeleteRecord(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("recordsDeleteRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteRecordRequest](../../models/operations/delete-record-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteRecordSecurity](../../models/operations/delete-record-security.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## streamRecordBuffer

Stream the binary content of a record's file.<br><br>
<b>Overview:</b><br>
Returns the raw file content with appropriate Content-Type and Content-Disposition headers for download or inline viewing.<br><br>
<b>Use Cases:</b><br>
<ul>
<li>File downloads</li>
<li>Inline document preview</li>
<li>Content extraction pipelines</li>
</ul>
<b>Format Conversion:</b><br>
Use <code>convertTo</code> parameter to convert between formats (e.g., DOCX to PDF).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="streamRecordBuffer" method="get" path="/knowledgeBase/stream/record/{recordId}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.records.streamRecordBuffer({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    recordId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { recordsStreamRecordBuffer } from "pipeshub/funcs/records-stream-record-buffer.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await recordsStreamRecordBuffer(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordsStreamRecordBuffer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StreamRecordBufferRequest](../../models/operations/stream-record-buffer-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.StreamRecordBufferSecurity](../../models/operations/stream-record-buffer-security.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |