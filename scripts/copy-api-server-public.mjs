import { cp, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

await rm(resolve(repoRoot, "artifacts/api-server/public"), {
  recursive: true,
  force: true,
});
await cp(
  resolve(repoRoot, "artifacts/mashall/public"),
  resolve(repoRoot, "artifacts/api-server/public"),
  { recursive: true },
);
