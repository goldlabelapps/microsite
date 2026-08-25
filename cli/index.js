import process from "node:process";
import { execSync } from "node:child_process";
import { banner, colors, log, promptSelect } from "./terminal.js";
import { printEnvSummary, checkEnv } from "./env.js";
import { showHelp } from "./commands/help.js";
import { runSetup } from "./commands/setup.js";
import { runDev } from "./commands/dev.js";
import { runTest } from "./commands/test.js";
import { runScaffold } from "./commands/scaffold.js";
import { runGit } from "./commands/git.js";

const VERSION = "0.1.1";

const MAIN_MENU_OPTIONS = [
  { label: "🚀 Project Setup & Doctor", value: "setup", desc: "Guided onboarding & environment verification" },
  { label: "⚡ Launch Dev Server", value: "dev", desc: "Start Next.js local server on port 2026" },
  { label: "🧪 Run Test Suites", value: "test", desc: "Vitest, Coverage, Playwright E2E, Quality Gate" },
  { label: "🏗️  Scaffold Content & Code", value: "scaffold", desc: "Interactive builder for Bento cards, use cases, blogs" },
  { label: "🌿 Git Workflow & Commits", value: "git", desc: "Branch status, Conventional Commits helper" },
  { label: "🔧 Toolchain Diagnostics", value: "env", desc: "Node, package manager, and platform diagnostics" },
  { label: "📦 Build Production Static Site", value: "build", desc: "Compile optimized static production bundle" },
  { label: "📖 Unix Manual & Synopsis", value: "help", desc: "Display full command line reference" },
];

/**
 * Parse CLI flags and positional arguments
 */
export function parseArgs(rawArgs) {
  const flags = {
    help: false,
    version: false,
    interactive: false,
    quiet: false,
    dryRun: false,
    yes: false,
  };

  const positional = [];

  for (let i = 0; i < rawArgs.length; i++) {
    const arg = rawArgs[i];
    if (arg === "-h" || arg === "--help") {
      flags.help = true;
    } else if (arg === "-v" || arg === "--version") {
      flags.version = true;
    } else if (arg === "-i" || arg === "--interactive") {
      flags.interactive = true;
    } else if (arg === "-q" || arg === "--quiet") {
      flags.quiet = true;
    } else if (arg === "--dry-run") {
      flags.dryRun = true;
    } else if (arg === "-y" || arg === "--yes") {
      flags.yes = true;
    } else if (!arg.startsWith("-")) {
      positional.push(arg);
    }
  }

  return {
    command: positional[0] || null,
    subcommand: positional[1] || null,
    extra: positional.slice(2),
    flags,
  };
}

/**
 * Interactive main menu loop
 */
async function runInteractiveMenu(flags) {
  while (true) {
    console.log(banner);
    const choice = await promptSelect("✦ Goldlabel Microsite — Main Menu", MAIN_MENU_OPTIONS);

    if (choice === "exit") {
      log.info("Goodbye!");
      break;
    }

    switch (choice) {
      case "setup":
        await runSetup({ ...flags, interactive: true });
        break;
      case "dev":
        await runDev(flags);
        break;
      case "test":
        await runTest(null, { ...flags, interactive: true });
        break;
      case "scaffold":
        await runScaffold(null, { ...flags, interactive: true });
        break;
      case "git":
        await runGit(null, { ...flags, interactive: true });
        break;
      case "env":
        printEnvSummary();
        break;
      case "build": {
        const env = checkEnv();
        const pm = env.packageManagers.preferred;
        log.info(`Compiling production build with ${pm}...`);
        try {
          execSync(`${pm} run build`, { stdio: "inherit" });
          log.success("Build compiled successfully!");
        } catch {
          log.error("Build failed.");
        }
        break;
      }
      case "help":
        showHelp();
        break;
    }

    log.divider();
  }
}

/**
 * Main entry point for CLI execution
 */
export async function runCli(rawArgs = process.argv.slice(2)) {
  const { command, subcommand, flags } = parseArgs(rawArgs);

  if (flags.version) {
    console.log(`microsite / gla v${VERSION}`);
    return;
  }

  if (flags.help && !command) {
    showHelp();
    return;
  }

  // If no command is provided, launch interactive menu
  if (!command || flags.interactive) {
    await runInteractiveMenu(flags);
    return;
  }

  // Direct command routing
  switch (command.toLowerCase()) {
    case "setup":
    case "init":
      await runSetup(flags);
      break;

    case "dev":
    case "start":
      await runDev(flags);
      break;

    case "test":
      await runTest(subcommand, flags);
      break;

    case "scaffold":
    case "generate":
      await runScaffold(subcommand, flags);
      break;

    case "git":
      await runGit(subcommand, flags);
      break;

    case "env":
    case "doctor":
    case "check-env":
      printEnvSummary();
      break;

    case "build": {
      const env = checkEnv();
      const pm = env.packageManagers.preferred;
      if (flags.dryRun) {
        log.info(`[DRY-RUN] Would run: ${pm} run build`);
      } else {
        log.info(`Running production build with ${pm}...`);
        execSync(`${pm} run build`, { stdio: "inherit" });
        log.success("Build compiled successfully!");
      }
      break;
    }

    case "help":
      showHelp();
      break;

    default:
      log.error(`Unknown command '${command}'.`);
      console.log(`Run ${colors.bold}pnpm run cli --help${colors.reset} for a list of available commands.\n`);
      process.exitCode = 1;
  }
}
