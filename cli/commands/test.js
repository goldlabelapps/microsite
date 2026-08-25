import { execSync } from "node:child_process";
import { checkEnv } from "../env.js";
import { log, colors, banner, promptSelect } from "../terminal.js";

const TEST_OPTIONS = [
  { label: "Unit & Component Tests", value: "unit", desc: "Fast Vitest unit/component suite" },
  { label: "Interactive Watch Mode", value: "watch", desc: "Vitest auto-rerun on file save" },
  { label: "Code Coverage Analysis", value: "coverage", desc: "V8 coverage report with thresholds" },
  { label: "Playwright E2E Tests", value: "e2e", desc: "End-to-end browser interactions" },
  { label: "Playwright Interactive UI", value: "ui", desc: "Visual step-by-step test debugger" },
  { label: "Full Quality Gate (CI)", value: "ci", desc: "Typecheck + Lint + Coverage + Build" },
];

export async function runTest(subcommand, options = {}) {
  const env = checkEnv();
  const pm = env.packageManagers.preferred;

  let choice = subcommand;

  if (!choice || options.interactive) {
    if (!options.quiet) {
      console.log(banner);
    }
    choice = await promptSelect("🧪 Select Test Suite to Execute", TEST_OPTIONS);
    if (choice === "exit") {
      log.info("Aborted test runner.");
      return true;
    }
  }

  let cmd = "";
  let description = "";

  switch (choice.toLowerCase()) {
    case "unit":
      cmd = `${pm} run test`;
      description = "Running Unit & Component Tests with Vitest";
      break;
    case "watch":
      cmd = `${pm} run test:watch`;
      description = "Starting Vitest Interactive Watcher";
      break;
    case "coverage":
      cmd = `${pm} run test:coverage`;
      description = "Generating V8 Code Coverage Report";
      break;
    case "e2e":
      cmd = `${pm} run test:e2e`;
      description = "Executing Playwright Cross-Browser End-to-End Suite";
      break;
    case "ui":
    case "e2e:ui":
      cmd = `${pm} run test:e2e:ui`;
      description = "Launching Playwright UI Test Runner";
      break;
    case "ci":
    case "gate":
      cmd = `${pm} run ci`;
      description = "Running Pre-Merge CI Quality Gate Pipeline";
      break;
    default:
      log.error(`Unknown test target: '${choice}'. Available targets: unit, watch, coverage, e2e, ui, ci`);
      return false;
  }

  log.info(`${colors.bold}${description}${colors.reset}`);
  log.divider();

  if (options.dryRun) {
    log.info(`[DRY-RUN] Would execute: ${colors.cyan}${cmd}${colors.reset}`);
    return true;
  }

  try {
    execSync(cmd, { stdio: "inherit", shell: true });
    log.divider();
    log.success(`${description} completed successfully.`);
    return true;
  } catch {
    log.divider();
    log.error(`${description} encountered failures.`);
    return false;
  }
}
