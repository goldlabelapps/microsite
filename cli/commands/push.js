import { execSync } from "node:child_process";
import { checkEnv } from "../env.js";
import { log, colors, banner, promptConfirm, promptInput, promptSelect } from "../terminal.js";

/**
 * Executes the full GitHub Actions CI Quality Gate locally
 */
export async function runCiQualityGate(pm = "npm", options = {}) {
  console.log(`\n${colors.bold}${colors.brightWhite}🛡️  Executing CI Quality Gate (GitHub Actions Parity)${colors.reset}\n`);

  const steps = [
    { name: "TypeScript Verification", cmd: `${pm} run typecheck` },
    { name: "ESLint Code Analysis", cmd: `${pm} run lint` },
    { name: "Vitest Unit & Integration Matrix", cmd: `${pm} test` },
    { name: "Next.js Production Build", cmd: `${pm} run build` },
    { name: "Playwright E2E Test Suite", cmd: `npx playwright test --project=chromium` },
  ];

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    log.step(i + 1, steps.length, `Running ${colors.bold}${step.name}${colors.reset} (${colors.dim}${step.cmd}${colors.reset})...`);

    if (options.dryRun) {
      log.info(`[DRY-RUN] Would execute: ${step.cmd}`);
      continue;
    }

    try {
      execSync(step.cmd, { stdio: "inherit" });
      log.success(`${step.name} passed.`);
    } catch {
      log.error(`Quality Gate Failed at step [${i + 1}/${steps.length}]: ${step.name}.`);
      log.warn("Aborting push and PR creation. Fix the issues above before pushing to remote.");
      return false;
    }
  }

  log.divider();
  log.success("All CI Quality Gate checks passed successfully (100% Green)!");
  log.divider();
  return true;
}

/**
 * Determine remote repository URL or owner/repo slug
 */
function getRepoSlug() {
  try {
    const remoteUrl = execSync("git config --get remote.origin.url", { encoding: "utf-8" }).trim();
    const match = remoteUrl.match(/github\.com[:/]([^/]+\/[^/.]+)(?:\.git)?$/i);
    return match ? match[1] : "goldlabelapps/microsite";
  } catch {
    return "goldlabelapps/microsite";
  }
}

/**
 * Push current branch and raise Pull Request to staging or master
 */
export async function runPushAndPr(options = {}) {
  if (!options.quiet) {
    console.log(banner);
    console.log(`${colors.bold}${colors.brightCyan}🚀 Automated Push & PR Assistant (/push workflow)${colors.reset}\n`);
  }

  const env = checkEnv();
  if (!env.git.installed) {
    log.error("Git is not installed or not in PATH.");
    return false;
  }

  const currentBranch = env.git.branch;
  if (!currentBranch || currentBranch === "HEAD" || currentBranch === "detached") {
    log.error("Cannot create PR from a detached HEAD state. Please checkout or create a named branch.");
    return false;
  }

  // 1. Determine Target Branch
  // If current is staging -> target master; otherwise -> target staging
  const targetBranch = currentBranch.toLowerCase() === "staging" ? "master" : "staging";

  console.log(`${colors.bold}Source Branch:${colors.reset} ${colors.brightYellow}${currentBranch}${colors.reset}`);
  console.log(`${colors.bold}Target Base Branch:${colors.reset} ${colors.brightGreen}${targetBranch}${colors.reset}`);
  log.divider();

  // 2. Run Quality Gate
  const pm = env.packageManagers.preferred || "npm";
  const passed = await runCiQualityGate(pm, options);
  if (!passed) {
    return false;
  }

  // 3. Handle Working Tree & Commits
  const isDirty = env.git.dirty;
  if (isDirty) {
    log.warn("Detected uncommitted changes in working tree.");
    const shouldCommit = options.yes || (await promptConfirm("Stage and commit all changes before pushing?", true));
    if (!shouldCommit) {
      log.info("Push aborted because working tree has uncommitted changes.");
      return false;
    }

    const defaultMsg = `chore: update project on ${currentBranch}`;
    const commitMsg = options.yes
      ? defaultMsg
      : await promptInput("Enter commit message", defaultMsg);

    if (options.dryRun) {
      log.info(`[DRY-RUN] Would run: git add -A && git commit -m "${commitMsg}"`);
    } else {
      try {
        execSync("git add -A", { stdio: "inherit" });
        execSync(`git commit -m "${commitMsg}"`, { stdio: "inherit" });
        log.success("Changes committed.");
      } catch (err) {
        log.error("Failed to commit changes: " + err.message);
        return false;
      }
    }
  }

  // 4. Push Branch to Origin
  log.info(`Pushing branch ${colors.bold}${currentBranch}${colors.reset} upstream to origin...`);
  if (options.dryRun) {
    log.info(`[DRY-RUN] Would run: git push -u origin ${currentBranch}`);
  } else {
    try {
      execSync(`git push -u origin ${currentBranch}`, { stdio: "inherit" });
      log.success(`Branch ${currentBranch} pushed to origin.`);
    } catch {
      log.warn("Could not push with -u. Attempting standard git push...");
      try {
        execSync("git push", { stdio: "inherit" });
        log.success("Pushed to origin.");
      } catch (err) {
        log.error("Git push failed: " + err.message);
        return false;
      }
    }
  }

  // 5. Raise Pull Request to Target Branch
  log.divider();
  log.info(`Raising Pull Request: ${colors.bold}${currentBranch}${colors.reset} ➔ ${colors.bold}${targetBranch}${colors.reset}...`);

  const repoSlug = getRepoSlug();
  const prTitle = `Merge ${currentBranch} into ${targetBranch}`;
  const prBody = `### 🚀 Automated Quality Gate PR\n\n- **Source Branch**: \`${currentBranch}\`\n- **Target Branch**: \`${targetBranch}\`\n- **Local CI Verification**: All Typecheck, Lint, Unit, Build & E2E Playwright tests passed.\n\n*Created via Goldlabel Autonomous CLI (\`/push\` workflow)*`;

  let hasGhCli = false;
  try {
    execSync("gh --version", { stdio: "ignore" });
    hasGhCli = true;
  } catch {
    hasGhCli = false;
  }

  if (hasGhCli) {
    if (options.dryRun) {
      log.info(`[DRY-RUN] Would execute: gh pr create --base ${targetBranch} --head ${currentBranch} --title "${prTitle}"`);
    } else {
      try {
        const ghCmd = `gh pr create --base "${targetBranch}" --head "${currentBranch}" --title "${prTitle}" --body "${prBody.replace(/"/g, '\\"')}"`;
        execSync(ghCmd, { stdio: "inherit" });
        log.success(`Pull Request created successfully to ${targetBranch}!`);
        return true;
      } catch (err) {
        log.warn("GitHub CLI error (PR may already exist or needs auth): " + err.message);
      }
    }
  }

  // Fallback: Direct GitHub Comparison / PR URL
  const compareUrl = `https://github.com/${repoSlug}/compare/${targetBranch}...${currentBranch}?expand=1`;
  console.log(`\n${colors.bold}${colors.brightGreen}🔗 GitHub PR Link:${colors.reset}`);
  console.log(`    ${colors.cyan}${compareUrl}${colors.reset}\n`);

  if (!hasGhCli) {
    log.info("Tip: Install GitHub CLI (`gh`) to automate PR creation directly from terminal in the future.");
  }

  return true;
}
