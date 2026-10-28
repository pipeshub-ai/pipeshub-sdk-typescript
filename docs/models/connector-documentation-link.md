# ConnectorDocumentationLink

A help link shown on a connector's setup page

## Example Usage

```typescript
import { ConnectorDocumentationLink } from "@pipeshub-ai/sdk/models";

let value: ConnectorDocumentationLink = {
  title: "Azure AD App Registration Setup",
  type: "setup",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `title`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | Link text                                                                                        | Azure AD App Registration Setup                                                                  |
| `url`                                                                                            | *string*                                                                                         | :heavy_minus_sign:                                                                               | Link target                                                                                      |                                                                                                  |
| `type`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | Free-form link category set by the connector, for example<br/>`setup`, `pipeshub`, `api` or `docs`.<br/> | setup                                                                                            |