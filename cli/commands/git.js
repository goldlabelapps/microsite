import { execSync } from "node:child_process";
import { checkEnv } from "../env.js";
import { log, colors, banner, promptSelect, promptInput, promptConfirm } from "../terminal.js";

const COMMIT_TYPES = [
  { label: "feat:     A new feature", value: "feat" },
  { label: "fix:      A bug fix", value: "fix" },
  { label: "docs:     Documentation only changes", value: "docs" },
  { label: "refactor: Code change that neither fixes a bug nor adds a feature", value: "refactor" },
  { label: "test:     Adding missing tests or correcting existing tests", value: "test" },
  { label: "style:    Formatting, white-space, missing semi-colons", value: "style" },
  { label: "chore:    Build process, dependencies, or auxiliary tool changes", value: "chore" },
];

export async function runGit(subcommand, options = {}) {
  const env = checkEnv();
  if (!env.git.installed) {
    log.error("Git is not installed or not in PATH.");
    return false;
  }

  if (!options.quiet) {
    console.log(banner);
    console.log(`${colors.bold}${colors.brightWhite}🌿 Git Workflow & Conventional Commits Assistant${colors.reset}\n`);
  }

  // Display status
  console.log(`${colors.bold}Current Branch:${colors.reset} ${colors.cyan}${env.git.branch || "detached"}${colors.reset}`);
  log.divider();

  try {
    const statusOutput = execSync("git status -s", { encoding: "utf-8" }).trim();
    if (statusOutput) {
      console.log(`${colors.bold}Working Tree Changes:${colors.reset}`);
      console.log(statusOutput);
    } else {
      log.success("Working tree is clean. Nothing to commit.");
    }
  } catch {
    log.warn("Could not retrieve git status.");
  }
  log.divider();

  const choice = subcommand || (await promptSelect("Select Git Action", [
    { label: "Interactive Conventional Commit", value: "commit", desc: "Stage changes & format standardized commit message" },
    { label: "Push Changes to Origin", value: "push", desc: "Push active branch upstream" },
    { label: "View Git Log", value: "log", desc: "View recent 5 commits" },
  ]));

  if (choice === "exit") {
    log.info("Git action aborted.");
    return true;
  }

  switch (choice.toLowerCase()) {
    case "commit": {
      const type = await promptSelect("Select Conventional Commit Type", COMMIT_TYPES);
      if (type === "exit") return true;

      const scope = await promptInput("Commit Scope (optional, e.g. cli, hero, nav)");
      const message = await promptInput("Short Description", "update project configuration");

      const scopePrefix = scope ? `(${scope})` : "";
      const fullCommitMsg = `${type}${scopePrefix}: ${message}`;

      log.info(`Generated commit message: ${colors.bold}${colors.brightGreen}"${fullCommitMsg}"${colors.reset}`);

      const stageAll = await promptConfirm("Stage all modified files (git add -A)?", true);
      if (stageAll) {
        if (options.dryRun) {
          log.info(`[DRY-RUN] Would run: git add -A && git commit -m "${fullCommitMsg}"`);
          return true;
        }
        execSync("git add -A", { stdio: "inherit" });
        execSync(`git commit -m "${fullCommitMsg}"`, { stdio: "inherit" });
        log.success("Commit created successfully!");
      }
      break;
    }

    case "push": {
      if (options.dryRun) {
        log.info("[DRY-RUN] Would run: git push");
        return true;
      }
      try {
        log.info("Pushing changes to remote...");
        execSync("git push", { stdio: "inherit" });
        log.success("Pushed upstream successfully.");
      } catch {
        log.error("Failed to push changes. Check remote credentials or tracking branch.");
      }
      break;
    }

    case "log": {
      try {
        const logOutput = execSync("git log --oneline -n 5", { encoding: "utf-8" });
        console.log(`\n${colors.bold}Recent Commits:${colors.reset}`);
        console.log(logOutput);
      } catch {
        log.warn("Could not retrieve git log.");
      }
      break;
    }

    default:
      log.error(`Unknown git action: '${choice}'`);
      return false;
  }

  return true;
}
