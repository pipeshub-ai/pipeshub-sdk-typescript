# ToggleConnectorConflict

A Local FS desktop refusal, or the connector is locked


## Supported Types

### `errors.LocalFsDesktopRefusalError`

```typescript
const value: errors.LocalFsDesktopRefusalError = {
  success: false,
  code: "DESKTOP_OWNED_BY_OTHER_DEVICE",
  message:
    "No desktop is connected for connector conn_abc123. Open the Pipeshub desktop app on the machine that owns this folder.",
  details: {
    code: "DESKTOP_OWNED_BY_OTHER_DEVICE",
    connectorId: "<id>",
    retryable: true,
  },
};
```

### `errors.ErrorResponse`

```typescript
const value: errors.ErrorResponse = {
  error: {
    code: "HTTP_FORBIDDEN",
    message:
      "You need admin access to do this. Ask an admin in your organisation.",
  },
};
```

