import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "@/routeTree.gen";

describe("GitHub Pages URLs", () => {
  it.each(["/om-mig", "/projekt", "/kontakt"])("resolves %s with and without the Pages trailing slash", (path) => {
    const router = createRouter({
      routeTree,
      trailingSlash: "always",
      context: { queryClient: new QueryClient() },
    });
    expect(router.matchRoutes(path).at(-1)?.routeId).toBe(path);
    expect(router.matchRoutes(`${path}/`).at(-1)?.routeId).toBe(path);
  });

  it("uses the requested custom domain, not the misspelled variant", () => {
    expect(readFileSync("public/CNAME", "utf8").trim()).toBe("martinlabs.se");
  });
});