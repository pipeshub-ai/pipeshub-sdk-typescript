# ReferenceDatum

## Example Usage

```typescript
import { ReferenceDatum } from "@pipeshub-ai/sdk/models";

let value: ReferenceDatum = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Display name shown to the user.                                                                         |
| `id`                                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Technical identifier (numeric ID, UUID, etc.).                                                          |
| `type`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Item type (e.g. `project`, `issue`, `file`, `notebook`, `page`).                                        |
| `app`                                                                                                   | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Source application (e.g. `jira`, `confluence`, `sharepoint`,<br/>`slack`, `drive`, `gmail`).<br/>       |
| `webUrl`                                                                                                | *string*                                                                                                | :heavy_minus_sign:                                                                                      | URL to open the item in a browser.                                                                      |
| `metadata`                                                                                              | Record<string, *string*>                                                                                | :heavy_minus_sign:                                                                                      | App-specific fields keyed by name (e.g. `key` for a Jira project,<br/>`siteId` for a SharePoint document).<br/> |