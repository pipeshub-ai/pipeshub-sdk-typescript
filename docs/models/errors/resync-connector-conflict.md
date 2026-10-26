# ResyncConnectorConflict

Conflict. Possible reasons:<br>
<ul>
<li>A sync is already running, or the connector is locked</li>
<li><code>DESKTOP_OFFLINE</code> - Local FS: the owner device's desktop app is not connected</li>
<li><code>DESKTOP_UNCLAIMED</code> - Local FS: no device owns the connector yet</li>
</ul>
Local FS refusals carry <code>details.code</code> and use the
LocalFsDesktopRefusal body; the others use the standard error body.



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

