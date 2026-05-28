import { cp, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function run(command, args) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, {
      cwd: repoRoot,
      stdio: "inherit",
      shell: process.platform === "win32",
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolvePromise();
        return;
      }

      reject(new Error(`${command} ${args.join(" ")} failed with exit code ${code}`));
    });

    child.on("error", reject);
  });
}

await run("pnpm", ["--filter", "@workspace/mashall", "run", "build"]);

const publicDir = resolve(repoRoot, "public");
await rm(publicDir, { recursive: true, force: true });
await cp(resolve(repoRoot, "artifacts/mashall/dist/public"), publicDir, {
  recursive: true,
});
