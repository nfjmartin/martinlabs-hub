import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { pagesDomain, pagesOutput, pagesPaths } from "./pages-config.mjs";

assert.equal((await readFile(resolve(pagesOutput, "CNAME"), "utf8")).trim(), pagesDomain);
await access(resolve(pagesOutput, ".nojekyll"));
await access(resolve(pagesOutput, "404.html"));

for (const path of pagesPaths) {
  const file = resolve(pagesOutput, `.${path}`, "index.html");
  const html = await readFile(file, "utf8");
  assert.match(html, /<h1[\s>]/, `${path}: missing prerendered content`);
  assert.match(html, /<title>[^<]+<\/title>/, `${path}: missing page title`);
  assert.match(html, /<script[^>]+(?:src=|type="module")/, `${path}: missing client JavaScript`);
  // Validate every root-relative script, stylesheet and image on static hosting.
  for (const match of html.matchAll(/(?:src|href)="(\/(?!\/)[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const url = match[1];
    if (!url || pagesPaths.includes(url.replace(/\/$/, "") || "/")) continue;
    await access(resolve(pagesOutput, `.${decodeURIComponent(url)}`));
  }
  console.log(`Verified static page: ${path}`);
}

// Verify all pointer-backed media was included rather than left to a server.
async function verifyAssets(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = resolve(directory, entry.name);
    if (entry.isDirectory()) await verifyAssets(file);
    else if (entry.name.endsWith(".asset.json")) {
      const asset = JSON.parse(await readFile(file, "utf8"));
      const bytes = await readFile(resolve(pagesOutput, `.${asset.url}`));
      assert.equal(bytes.length, asset.size, `Missing or incomplete media: ${entry.name}`);
    }
  }
}
await verifyAssets(resolve("src/assets"));
console.log(`GitHub Pages artifact verified for https://${pagesDomain}`);