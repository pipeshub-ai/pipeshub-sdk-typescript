/*
 * Warn once per PipesHub instance when its release differs (major.minor) from the
 * one this SDK version is built for. The server reports its release on GET /api/v1/health.
 */

import { SDK_METADATA } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { BeforeRequestContext, BeforeRequestHook } from "./types.js";

/** The PipesHub release this SDK version is built for. Bump it with each SDK release. */
export const SUPPORTED_PIPESHUB_VERSION = "1.0.0";

const API_PREFIX = "/api/v1";
const HEALTH_TIMEOUT_MS = 2000;

const checked = new Set<string>();

function majorMinor(version: string): string | null {
  const [major, minor] = version.trim().replace(/^v/, "").split(".");
  return major && minor && /^\d+$/.test(major) && /^\d+$/.test(minor)
    ? `${Number(major)}.${Number(minor)}`
    : null;
}

/** The warning for a /health response body, or null when there is nothing to warn about. */
export function mismatchWarning(
  sdkVersion: string,
  instance: string,
  health: unknown,
): string | null {
  if (typeof health !== "object" || health === null || !("status" in health)) {
    return null;
  }
  const build = (health as { build?: unknown }).build;
  let running: string;
  if (typeof build !== "object" || build === null) {
    // PipesHub reports `build` from 1.0.0 on.
    running = "a PipesHub release older than 1.0.0";
  } else {
    const version = (build as { version?: unknown }).version;
    if (typeof version !== "string") return null; // a local or dev build reports no version
    const server = majorMinor(version);
    if (server === null || server === majorMinor(SUPPORTED_PIPESHUB_VERSION)) {
      return null;
    }
    running = `PipesHub ${version}`;
  }
  return `@pipeshub-ai/sdk ${sdkVersion} is built for PipesHub ${SUPPORTED_PIPESHUB_VERSION}, `
    + `but ${instance} runs ${running}. Some calls may not work as expected.`;
}

async function check(client: HTTPClient, instance: string): Promise<void> {
  let warning: string | null;
  try {
    const response = await client.request(
      new Request(`${instance}${API_PREFIX}/health`, {
        signal: AbortSignal.timeout(HEALTH_TIMEOUT_MS),
      }),
    );
    if (response.status !== 200) return;
    warning = mismatchWarning(SDK_METADATA.sdkVersion, instance, await response.json());
  } catch {
    return; // the check must never affect the caller's requests
  }
  if (warning) console.warn(warning);
}

export class VersionCheckHook implements BeforeRequestHook {
  beforeRequest(hookCtx: BeforeRequestContext, request: Request): Request {
    const index = request.url.indexOf(`${API_PREFIX}/`);
    const client = hookCtx.options.httpClient;
    if (index === -1 || !client) return request;
    const instance = request.url.slice(0, index);
    if (checked.has(instance)) return request;
    checked.add(instance);
    // Not awaited, so the caller's request never waits on the check.
    void check(client, instance);
    return request;
  }
}
