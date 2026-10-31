import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { assetOrigin, pagesOutput } from "./pages-config.mjs";

// Copy pointer-backed media into the deploy artifact at its existing URL.
// The published website then serves its own assets without a Lovable proxy.
async function materializeAssets(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      await materializeAssets(file);
    } else if (entry.name.endsWith(".asset.json")) {
      const asset = JSON.parse(await readFile(file, "utf8"));
      if (!asset.url.startsWith("/__l5e/assets-v1/") || asset.url.includes("..")) {
        throw new Error(`Unsupported asset path in ${file}`);
      }
      const response = await fetch(new URL(asset.url, assetOrigin));
      if (!response.ok) throw new Error(`Asset download failed: ${response.status} (${entry.name})`);
      const bytes = new Uint8Array(await response.arrayBuffer());
      if (bytes.length !== asset.size || !response.headers.get("content-type")?.startsWith(asset.content_type)) {
        throw new Error(`Asset size or content type mismatch (${entry.name})`);
      }
      const destination = resolve(pagesOutput, `.${asset.url}`);
      await mkdir(dirname(destination), { recursive: true });
      await writeFile(destination, bytes);
      console.log(`Included media: ${asset.original_filename}`);
    }
  }
}

await materializeAssets(resolve("src/assets"));
// Unknown paths get a genuine 404, not a misleading copy of the home page.
await writeFile(resolve(pagesOutput, "404.html"), `<!doctype html>
<html lang="sv"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Sidan finns inte — Martin</title><meta name="robots" content="noindex"></head>
<body><h1>Sidan finns inte</h1><p>Adressen kan ha ändrats.</p><a href="/">Till startsidan</a></body></html>`);