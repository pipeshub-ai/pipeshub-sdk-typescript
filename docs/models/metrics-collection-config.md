# MetricsCollectionConfig

Configuration for application telemetry and metrics collection.
Metrics are collected anonymously and pushed to a remote server for analytics.


## Example Usage

```typescript
import { MetricsCollectionConfig } from "@pipeshub-ai/sdk/models";

let value: MetricsCollectionConfig = {
  enableMetricCollection: "true",
  pushIntervalMs: "60000",
  serverUrl: "https://metrics-collector.example.com/collect-metrics",
  apiKey: "54523f794e23d96e",
  appVersion: "1.0.0",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `enableMetricCollection`                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Master switch for metrics collection. When disabled, no metrics are collected or pushed.<br/>Default: "true"<br/>              | true                                                                                                                           |
| `pushIntervalMs`                                                                                                               | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Interval in milliseconds between metrics pushes to the remote server.<br/>Minimum: 1000ms (1 second), Default: 60000ms (1 minute)<br/> | 60000                                                                                                                          |
| `serverUrl`                                                                                                                    | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | URL of the metrics collection server. For self-hosted analytics, point this<br/>to your own Prometheus-compatible endpoint.<br/> | https://metrics-collector.example.com/collect-metrics                                                                          |
| `apiKey`                                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | API key for authenticating with the metrics server. Auto-generated if not provided.<br/>                                       | 54523f794e23d96e                                                                                                               |
| `appVersion`                                                                                                                   | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Current application version for metrics tagging.                                                                               | 1.0.0                                                                                                                          |