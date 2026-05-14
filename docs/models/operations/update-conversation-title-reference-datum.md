# UpdateConversationTitleReferenceDatum

## Example Usage

```typescript
import { UpdateConversationTitleReferenceDatum } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConversationTitleReferenceDatum = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Display name shown to the user.                                                                         |
| `id`                                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Technical identifier (numeric ID, UUID, etc.).                                                          |
| `type`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Item type (e.g. `project`, `issue`, `file`, `notebook`, `page`).                                        |
| `app`                                                                                                   | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Source application (e.g. `jira`, `confluence`,<br/>`sharepoint`, `slack`, `drive`, `gmail`).<br/>       |
| `webUrl`                                                                                                | *string*                                                                                                | :heavy_minus_sign:                                                                                      | URL to open the item in a browser.                                                                      |
| `metadata`                                                                                              | Record<string, *string*>                                                                                | :heavy_minus_sign:                                                                                      | App-specific fields keyed by name (e.g. `key` for a Jira<br/>project, `siteId` for a SharePoint document).<br/> |