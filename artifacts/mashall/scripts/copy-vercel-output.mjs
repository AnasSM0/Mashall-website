import { cp, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distPublic = resolve(appRoot, "dist/public");
const publicDir = resolve(appRoot, "public");

await rm(publicDir, { recursive: true, force: true });
await cp(distPublic, publicDir, { recursive: true });
