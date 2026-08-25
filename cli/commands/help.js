import { banner, colors, log } from "../terminal.js";

export function showHelp() {
  console.log(banner);
  console.log(`${colors.bold}${colors.brightWhite}NAME${colors.reset}`);
  console.log(`    ${colors.cyan}microsite / gla${colors.reset} — Goldlabel Autonomous Microsite Command Line Tool\n`);

  console.log(`${colors.bold}${colors.brightWhite}SYNOPSIS${colors.reset}`);
  console.log(`    ${colors.bold}pnpm run setup${colors.reset}`);
  console.log(`    ${colors.bold}pnpm run cli${colors.reset} [COMMAND] [OPTIONS]\n`);

  console.log(`${colors.bold}${colors.brightWhite}COMMANDS${colors.reset}`);
  console.log(`    ${colors.bold}${colors.brightGreen}setup${colors.reset}          Interactive project onboarding, dependency install & verification`);
  console.log(`    ${colors.bold}${colors.brightGreen}dev${colors.reset}            Launch local Next.js development server on port 2026`);
  console.log(`    ${colors.bold}${colors.brightGreen}test${colors.reset} [type]     Run test suites: ${colors.dim}unit, coverage, e2e, ui, ci${colors.reset}`);
  console.log(`    ${colors.bold}${colors.brightGreen}push${colors.reset} [options]  Run full CI quality gate, commit & raise PR to staging/master`);
  console.log(`    ${colors.bold}${colors.brightGreen}scaffold${colors.reset}       Interactively scaffold new feature tabs, use cases, or blog posts`);
  console.log(`    ${colors.bold}${colors.brightGreen}git${colors.reset}            Git repository manager & Conventional Commit generator`);
  console.log(`    ${colors.bold}${colors.brightGreen}env${colors.reset}            Display toolchain diagnostics (Node, PM, Git, Playwright)`);
  console.log(`    ${colors.bold}${colors.brightGreen}build${colors.reset}          Compile optimized static production bundle`);
  console.log(`    ${colors.bold}${colors.brightGreen}help${colors.reset}           Display this Unix manual synopsis\n`);

  console.log(`${colors.bold}${colors.brightWhite}OPTIONS & FLAGS${colors.reset}`);
  console.log(`    ${colors.cyan}-h, --help${colors.reset}         Show manual synopsis and command usage`);
  console.log(`    ${colors.cyan}-v, --version${colors.reset}      Output version number (v0.1.1)`);
  console.log(`    ${colors.cyan}-i, --interactive${colors.reset}  Force launch interactive menu loop`);
  console.log(`    ${colors.cyan}-q, --quiet${colors.reset}        Suppress decorative banners and verbose outputs`);
  console.log(`    ${colors.cyan}--dry-run${colors.reset}          Print commands without executing side-effects\n`);

  console.log(`${colors.bold}${colors.brightWhite}EXAMPLES${colors.reset}`);
  console.log(`    ${colors.dim}# 1. Complete interactive project setup:${colors.reset}`);
  console.log(`    $ pnpm run setup\n`);
  console.log(`    ${colors.dim}# 2. Launch interactive toolchain menu:${colors.reset}`);
  console.log(`    $ pnpm run cli\n`);
  console.log(`    ${colors.dim}# 3. Run unit tests with coverage:${colors.reset}`);
  console.log(`    $ pnpm run cli test coverage\n`);
  console.log(`    ${colors.dim}# 4. Scaffold a new feature into site.config.ts:${colors.reset}`);
  console.log(`    $ pnpm run cli scaffold feature\n`);

  log.divider();
}
