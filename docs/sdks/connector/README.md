# Connector

## Overview

Connector-related operations

### Available Operations

* [getRecordContent](#getrecordcontent) - Get a record's full parsed content and metadata
* [navigateKnowledgeGraph](#navigateknowledgegraph) - Browse the knowledge graph from a node
* [lookupRecordByIdentifier](#lookuprecordbyidentifier) - Resolve a URL, issue key or external ID to a Record ID

## getRecordContent

Retrieve the full parsed content and metadata of a single record —
the same content PipesHub's own RAG/chat pipeline uses to answer
questions, returned directly instead of via chat.

**When to use this vs. the other record endpoints:**
- `GET /knowledgeBase/record/{recordId}` returns metadata only
  (name, type, indexing status, size) — no content.
- `GET /knowledgeBase/stream/record/{recordId}` returns the original,
  unparsed file bytes — use it to download/open the source file.
- **This endpoint** returns the record's full parsed content as a
  single plain-text `content` string (a metadata header, then the
  block/table text in reading order, then any foreign-key related
  tables) — use it when you need the record's actual textual/tabular
  content without downloading and re-parsing the original file yourself.

**Typical flow:** obtain a `recordId` from a `pipeshub_search` hit or
a chat citation's `recordId`, then call this endpoint to read the
full content when the search snippet or citation excerpt isn't
enough to answer the question.

**Permission scoping:**

The requesting user/token must have access to the record; access is
verified via the knowledge graph before content is returned — a
caller with a valid scope but no access to this specific record gets
a `403`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRecordContent" method="get" path="/connectors/record/{recordId}/content" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connector.getRecordContent({
    recordId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorGetRecordContent } from "@pipeshub-ai/sdk/funcs/connector-get-record-content.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorGetRecordContent(pipeshub, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorGetRecordContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRecordContentRequest](../../models/operations/get-record-content-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetRecordContentResponseSchema](../../models/get-record-content-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 401, 403                    | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## navigateKnowledgeGraph

Open a node in the knowledge graph and see what is inside it — a file
explorer across every connected source.

Call it with no `nodeId` for a flat listing of every record group and
record the caller can reach, newest first. This is a starting point to
pick a node from, not a roster of connected apps — app nodes are never
returned in a listing, though an app's `id` is accepted as a `nodeId`
and lists that app's record groups. Pass a node's `id` to descend:
record groups contain records and folders, and a record contains its
own children — comments, attachments, sub-tasks — plus a `related`
section of cross-referenced records, such as the Confluence page linked
from a Jira ticket. `nodeId` is tolerant: a URL or an issue key such as
`PA-1787` is resolved to its record before navigating, so a link can be
pasted straight in without a separate lookup call.

The response carries a rendered `text` view — breadcrumbs, the current
node, the children listing, `Related:`, and a closing `Next:` line
naming a follow-up call. The structured fields carry the same
information for programmatic use.

**When to use this vs. the other record endpoints:**
- **This endpoint** is for structural exploration — "what is in this
  project", "what is attached to this ticket", "what else links to this
  page". It returns names, types and IDs; it never returns document
  text.
- `GET /connectors/record/{recordId}/content` returns one record's
  actual parsed text. Use it once navigation has identified the record
  you want to read.
- `GET /connectors/record/lookup` is the way in when you hold a URL or
  an issue key rather than a position in the tree.

**Typical flow:** call with no `nodeId` to see what is reachable → pass
a record group's `id` to list its records → take a row whose
`is_record` is true and call
`GET /connectors/record/{recordId}/content` to read it.

**Paging and depth:** results are paginated; `pagination.has_next`
tells you whether to request the next `page`. `depth` above 1 returns
all descendants down to that level as one flat list, each row carrying
its own `level`, instead of only direct children.

**Scope:** everything the caller can read, across both connectors and
Knowledge Base collections. No connector-level filter is applied — the
listing is bounded by per-node permissions alone.

**Permission scoping:**

`rows` and `related` carry only nodes the caller can see, and the
opened node itself is access-checked before any of its details are
returned. A node that does not exist and a node the caller cannot
access are deliberately indistinguishable — both return an empty view
rather than an error.

`breadcrumbs` is the exception: the ancestor trail is resolved by id
alone, without a permission check. For a record shared directly with
the caller, it can therefore name ancestors the caller cannot open.
Treat breadcrumb entries as labels, not as nodes guaranteed to be
navigable.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="navigateKnowledgeGraph" method="get" path="/connectors/navigate" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connector.navigateKnowledgeGraph({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorNavigateKnowledgeGraph } from "@pipeshub-ai/sdk/funcs/connector-navigate-knowledge-graph.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorNavigateKnowledgeGraph(pipeshub, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorNavigateKnowledgeGraph failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.NavigateKnowledgeGraphRequest](../../models/operations/navigate-knowledge-graph-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.NavigateKnowledgeGraphResponseSchema](../../models/navigate-knowledge-graph-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## lookupRecordByIdentifier

Turn an external reference into the matching PipesHub record. Accepts a
pasted link, a Jira-style issue key, or a bare external system ID from
any connected source. Repeat `identifiers` to batch-resolve up to ten
in one call.

The response carries a rendered `text` view — each match's metadata
block followed by a `Next:` line naming a follow-up call. The structured
fields carry the same information for programmatic use.

**Accepted identifiers**
- Jira issue URL — `https://acme.atlassian.net/browse/PA-1787`
- Jira issue key — `PA-1787`
- Confluence page URL —
  `https://acme.atlassian.net/wiki/spaces/SD/pages/450625553/Agent+Loop`
- Google Drive / Docs URL — `https://docs.google.com/document/d/1AbC.../edit`
- Slack message link — `https://acme.slack.com/archives/C0123/p1720000000000100`
- Bare external system ID — `450625553`

**When to use this vs. the other record endpoints:**
- **This endpoint** converts an *external* reference into an internal
  Record ID. Reach for it whenever you meet a link or ticket key and
  need the record behind it.
- `GET /connectors/record/{recordId}/content` reads a record you have
  already identified. It needs an internal Record ID, which is exactly
  what this endpoint returns.
- `GET /connectors/navigate` browses the hierarchy when you have a
  position in the tree rather than a specific identifier.

**Typical flow:** call this with the reference, take a match's `id`
from the response, then call
`GET /connectors/record/{recordId}/content` to read the record.

**Multiple matches:** one identifier can legitimately match more than
one record — the same external ID may exist in several connected
instances. In that case the response sets `ambiguous: true` and
`matches` holds every candidate. Present the choice rather than taking
the first; `connectorName` narrows a retry.

**Misses are not errors.**

Only records the caller can see are returned, and a miss is a `200`
with an empty `matches` array and the input echoed in
`not_found_identifiers` — not a `404`. The identifier resolved to
nothing *or* to something the caller may not access; the two are
deliberately indistinguishable, because an identifier is
caller-supplied and guessable, and confirming existence would leak
records across organizations. `searched_connectors` names what was
covered, so a retry with `connectorName` is often the right next move.

**Scope:** resolution searches every connector the caller can access,
regardless of any source filter used elsewhere.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lookupRecordByIdentifier" method="get" path="/connectors/record/lookup" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connector.lookupRecordByIdentifier({
    identifiers: [
      "<value 1>",
    ],
    connectorName: "DRIVE",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorLookupRecordByIdentifier } from "@pipeshub-ai/sdk/funcs/connector-lookup-record-by-identifier.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorLookupRecordByIdentifier(pipeshub, {
    identifiers: [
      "<value 1>",
    ],
    connectorName: "DRIVE",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorLookupRecordByIdentifier failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LookupRecordByIdentifierRequest](../../models/operations/lookup-record-by-identifier-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LookupRecordResponseSchema](../../models/lookup-record-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |