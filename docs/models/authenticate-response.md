# AuthenticateResponse

Either the next step in a multi-factor flow (`status`, `nextStep`, `allowedMethods`, `authProviders`)
or final tokens (`message`, `accessToken`, `refreshToken`).



## Supported Types

### `models.AuthenticateMultiStepResponse`

```typescript
const value: models.AuthenticateMultiStepResponse = {
  status: "success",
  nextStep: 606493,
  allowedMethods: [],
  authProviders: {},
};
```

### `models.AuthenticateFinalResponse`

```typescript
const value: models.AuthenticateFinalResponse = {
  message: "Fully authenticated",
  accessToken: "<value>",
  refreshToken: "<value>",
};
```

