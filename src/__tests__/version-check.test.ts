import { afterEach, expect, test, vi } from "vitest";
import { mismatchWarning, VersionCheckHook } from "../hooks/version-check.js";
import { BeforeRequestContext } from "../hooks/types.js";
import { HTTPClient } from "../lib/http.js";

const INSTANCE = "https://pipeshub.example";

function runHook(instance: string, health: unknown, status = 200, path = "/api/v1/knowledgeBase") {
  const calls: string[] = [];
  const httpClient = new HTTPClient({
    fetcher: async (input) => {
      calls.push(input instanceof Request ? input.url : String(input));
      return new Response(JSON.stringify(health), { status });
    },
  });
  const ctx = { options: { httpClient } } as unknown as BeforeRequestContext;
  const request = new Request(`${instance}${path}`);
  expect(new VersionCheckHook().beforeRequest(ctx, request)).toBe(request);
  return calls;
}

afterEach(() => {
  vi.restoreAllMocks();
});

test.each([
  { status: "healthy", build: { version: "1.0.0", commitId: "abc" } },
  { status: "healthy", build: { version: "1.0.7", commitId: "abc" } },
  { status: "healthy", build: { version: null, commitId: null } },
  { status: "healthy", build: { version: "dev", commitId: null } },
  { not: "pipeshub" },
  ["not", "a", "object"],
])("no warning for %j", (health) => {
  expect(mismatchWarning("2.0.0", INSTANCE, health)).toBeNull();
});

test("warns on another minor release", () => {
  const health = { status: "healthy", build: { version: "1.1.0", commitId: "abc" } };
  expect(mismatchWarning("2.0.0", INSTANCE, health)).toBe(
    "@pipeshub-ai/sdk 2.0.0 is built for PipesHub 1.0.0, but https://pipeshub.example "
      + "runs PipesHub 1.1.0. Some calls may not work as expected.",
  );
});

test("warns on a release without build info", () => {
  expect(mismatchWarning("2.0.0", INSTANCE, { status: "healthy" }))
    .toContain("a PipesHub release older than 1.0.0");
});

test("the hook warns once per instance", async () => {
  const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  const instance = "https://old.example";
  const health = { status: "healthy", build: { version: "0.10.0", commitId: "abc" } };

  expect(runHook(instance, health)).toEqual([`${instance}/api/v1/health`]);
  expect(runHook(instance, health)).toEqual([]);

  await vi.waitFor(() => expect(warn).toHaveBeenCalledTimes(1));
  expect(warn.mock.calls[0]?.[0]).toContain(`but ${instance} runs PipesHub 0.10.0`);
});

test("the hook is quiet when health fails", async () => {
  const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  const calls = runHook("https://down.example", { error: "boom" }, 500);
  await vi.waitFor(() => expect(calls).toHaveLength(1));
  await new Promise((resolve) => setTimeout(resolve, 10));
  expect(warn).not.toHaveBeenCalled();
});

test("the hook skips requests outside the API", () => {
  expect(runHook("https://mcp.example", { status: "healthy" }, 200, "/mcp")).toEqual([]);
});
