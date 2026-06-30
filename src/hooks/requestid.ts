/*
 * Stamp an x-request-id trace header onto every outbound SDK request.
 */

import { BeforeRequestContext, BeforeRequestHook } from "./types.js";

const REQUEST_ID_HEADER = "x-request-id";

/** Decodes the JWT payload without verifying the signature. */
function decodeJwtPayload(token: string): Record<string, unknown> | null {
  try {

    const base64Url = token.split(".")[1];

    if (!base64Url) return null;

    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

    // JWT base64url payloads may not be a multiple of 4 chars; pad to avoid atob errors
    const padded = base64.padEnd(
      base64.length + ((4 - (base64.length % 4)) % 4),
      "=",
    );

    const json = decodeURIComponent(
      atob(padded)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );

    const claims = JSON.parse(json);

    return typeof claims === "object" && claims !== null ? claims : null;

  } catch {
    return null;
  }
}

function userIdFromToken(request: Request): string | null {
  const auth = request.headers.get("authorization") ?? "";
  if (!auth.toLowerCase().startsWith("bearer ")) return null;
  const token = auth.slice(7).trim();
  const claims = decodeJwtPayload(token);
  return (claims?.["userId"] as string) || null;
}

export class RequestIDHook implements BeforeRequestHook {
  beforeRequest(_hookCtx: BeforeRequestContext, request: Request): Request {
    if (request.headers.get(REQUEST_ID_HEADER)) {
      return request;
    }
    const userId = userIdFromToken(request);
    const random = crypto.randomUUID().replace(/-/g, "");
    request.headers.set(
      REQUEST_ID_HEADER,
      userId ? `sdk-ts-${userId}-${random}` : `sdk-ts-${random}`,
    );
    return request;
  }
}
