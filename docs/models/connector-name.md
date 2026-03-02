# ConnectorName

Name of the source connector

## Example Usage

```typescript
import { ConnectorName } from "pipeshub/models";

let value: ConnectorName = "GOOGLE_DRIVE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"KB" | "ONEDRIVE" | "GOOGLE_DRIVE" | "CONFLUENCE" | "JIRA" | "SLACK" | "SHAREPOINT_ONLINE" | "GMAIL" | "DROPBOX" | "OUTLOOK" | "SERVICENOW" | "BOOKSTACK" | "WEB" | Unrecognized<string>
```