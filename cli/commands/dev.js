import { spawn } from "node:child_process";
import { checkEnv } from "../env.js";
import { log, colors, banner } from "../terminal.js";

export async function runDev(options = {}) {
  if (!options.quiet) {
    console.log(banner);
    console.log(`${colors.bold}${colors.brightWhite}⚡ Launching Local Development Server (Port 2026)${colors.reset}`);
    log.info(`Local URL:   ${colors.brightCyan}http://localhost:2026${colors.reset}`);
    log.info(`Network URL: ${colors.dim}http://127.0.0.1:2026${colors.reset}`);
    log.info(`Press ${colors.bold}Ctrl+C${colors.reset} at any time to stop the server.\n`);
    log.divider();
  }

  if (options.dryRun) {
    log.info(`[DRY-RUN] Would start: next dev -p 2026`);
    return true;
  }

  const env = checkEnv();
  const pm = env.packageManagers.preferred;

  return new Promise((resolve) => {
    const isWindows = process.platform === "win32";
    const shellCmd = isWindows ? "cmd.exe" : "/bin/sh";
    const shellArg = isWindows ? "/c" : "-c";
    const command = `${pm} run dev`;

    const child = spawn(shellCmd, [shellArg, command], {
      stdio: "inherit",
      cwd: process.cwd(),
      env: { ...process.env, PORT: "2026" },
    });

    const cleanup = () => {
      if (!child.killed) {
        child.kill();
      }
    };

    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);

    child.on("close", (code) => {
      process.off("SIGINT", cleanup);
      process.off("SIGTERM", cleanup);
      if (code === 0) {
        log.info("Development server stopped.");
        resolve(true);
      } else {
        log.warn(`Development server exited with code ${code}.`);
        resolve(false);
      }
    });
  });
}
