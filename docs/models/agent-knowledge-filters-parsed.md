# AgentKnowledgeFiltersParsed

What a knowledge source is limited to. With both lists empty the agent
searches the whole source; otherwise it searches only the listed
record groups, folders and records, each with everything under it, and
a selection made in a chat must lie under them. On GET, `filtersParsed`
is this shape parsed from the stored `filters` JSON string.

On create and update, `filters` may be this object or its JSON text.
The two lists must hold valid UUIDs, at most 200 across both; a value
that cannot be read is refused with 400 rather than saved as "no
limit", and so is a limit that covers more nodes than one search may
(50,000 by default). A stored limit that cannot be read limits the
source to nothing.


## Example Usage

```typescript
import { AgentKnowledgeFiltersParsed } from "@pipeshub-ai/sdk/models";

let value: AgentKnowledgeFiltersParsed = {};
```

## Fields

| Field                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `recordGroups`                                                                                                                                                                                                                      | *string*[]                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                  | Record-group ids (e.g. Confluence spaces, Jira projects), each with the groups nested in it. Not set for KB (Collection) entries — a KB is identified by its own `connectorId`; an id equal to a source's `connectorId` is ignored. |
| `records`                                                                                                                                                                                                                           | *string*[]                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                  | Folder or record ids, each with everything under it.                                                                                                                                                                                |
| `nodes`                                                                                                                                                                                                                             | [models.AgentKnowledgeFiltersParsedNode](../models/agent-knowledge-filters-parsed-node.md)[]                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                  | Names of the ids above, for display. Not used for search.                                                                                                                                                                           |