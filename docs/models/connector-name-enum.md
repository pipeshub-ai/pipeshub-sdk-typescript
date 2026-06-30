# ConnectorNameEnum

Name of the source connector. Mirrors the values of the backend
`Connectors` enum (`backend/python/app/config/constants/arangodb.py`);
records store the enum value (e.g. Google Drive is `DRIVE`,
SharePoint Online is `SHAREPOINT ONLINE`), not the enum member name.


## Example Usage

```typescript
import { ConnectorNameEnum } from "@pipeshub-ai/sdk/models";

let value: ConnectorNameEnum = "DRIVE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DRIVE" | "DRIVE WORKSPACE" | "GMAIL" | "GMAIL WORKSPACE" | "CALENDAR" | "ONEDRIVE" | "SHAREPOINT ONLINE" | "OUTLOOK" | "OUTLOOK PERSONAL" | "OUTLOOK CALENDAR" | "MICROSOFT TEAMS" | "NOTION" | "SLACK" | "SLACK WORKSPACE" | "KB" | "CONFLUENCE" | "CONFLUENCE DATA CENTER" | "CONFLUENCE DATA CENTER PERSONAL" | "JIRA" | "JIRA PERSONAL" | "JIRA DATA CENTER" | "JIRA DATA CENTER PERSONAL" | "BOX" | "NEXTCLOUD" | "DROPBOX" | "DROPBOX PERSONAL" | "WEB" | "BOOKSTACK" | "GITHUB" | "SERVICENOW" | "SALESFORCE" | "S3" | "MINIO" | "GCS" | "AZURE BLOB" | "AZURE FILES" | "LINEAR" | "ZAMMAD" | "ZOOM" | "GITLAB" | "GITLAB PERSONAL" | "SNOWFLAKE" | "POSTGRESQL" | "MARIADB" | "UNKNOWN" | "RSS" | "LOCAL_FS" | "CODING_SANDBOX" | "DATABASE_SANDBOX" | "IMAGE_GENERATION" | "ATTACHMENTS" | Unrecognized<string>
```