# Modular Cross-Platform CLI Architecture (`@goldlabelapps/cli`)

We are introducing a lightweight, modular, and cross-platform (macOS & Windows) command-line tool. It will provide both standard Unix non-interactive commands (e.g. `pnpm cli test`, `pnpm cli scaffold`, `pnpm cli dev`) and an interactive retro Unix terminal menu interface for quick onboarding (`pnpm run setup`), development, testing, scaffolding, and Git management.

The CLI is engineered with zero runtime dependencies (using native Node.js ESM standard library APIs) for instant execution and seamless extraction into the upcoming [`@goldlabelapps/cli`](https://www.npmjs.com/package/@goldlabelapps/cli) npm package.

---

## User Review Required

> [!NOTE]
> **Zero External Dependencies for the CLI**: By using native Node.js built-ins (`node:readline/promises`, `node:child_process`, `node:fs`, `node:path`, `node:os`), the CLI requires no heavy third-party dependencies (like `inquirer` or `commander`), making it load instantly in <20ms and completely portable across any Node.js environment.

> [!IMPORTANT]
> **Cross-Platform Compatibility**: Uses Node.js native path separators, process spawns with OS shell abstraction (`cmd.exe` on Windows, `/bin/sh` on macOS/Linux), and standard ANSI 16/256 color codes supported by modern Windows Terminal, macOS Terminal, and Linux shells.

---

## Proposed Architecture & Component Structure

```
microsite/
├── bin/
│   ├── cli.js                 # Executable Node.js entry point (#!/usr/bin/env node)
│   ├── setup.sh               # POSIX bash launcher helper
│   └── setup.cmd              # Windows cmd launcher helper
├── cli/
│   ├── index.js               # CLI Dispatcher, flag parser & interactive main menu loop
│   ├── terminal.js            # ANSI formatting, ASCII banners, interactive prompts & menus
│   ├── env.js                 # Environment validator (Node version, pnpm/npm, git, Playwright)
│   ├── commands/
│   │   ├── help.js            # Classic Unix manual & help menu
│   │   ├── setup.js           # Interactive project setup wizard & dependency installer
│   │   ├── dev.js             # Dev server launcher on port 2026 with port health check
│   │   ├── test.js            # Test launcher (Vitest, coverage, Playwright E2E, UI mode)
│   │   ├── scaffold.js        # Interactive code generator (Bento cards, use cases, blogs)
│   │   └── git.js             # Git workflow & Conventional Commits helper
│   └── cli.test.js            # Automated test suite for CLI command dispatch & environment validation
└── package.json               # Added "setup" and "cli" scripts, "bin" field
```

---

## Proposed Changes

### 1. Core CLI Engine (`cli/`)

#### [NEW] [cli/terminal.js](file:///Users/milky/My%20Drive/GitHub/microsite/cli/terminal.js)
- ANSI color formatting (bold, dim, green, yellow, red, cyan, magenta, blue).
- ASCII art branding banner (`GOLD LABEL APPS // MICROSITE CLI`).
- Interactive prompts using `node:readline/promises`:
  - `promptSelect(title, options)`: Numbered / key-based interactive selection menu.
  - `promptInput(question, defaultValue)`: Text input with default fallback.
  - `promptConfirm(question, defaultYes)`: Yes/No boolean confirmation.
- Formatters for tables, status spinners, and Unix help screens.

#### [NEW] [cli/env.js](file:///Users/milky/My%20Drive/GitHub/microsite/cli/env.js)
- Checks Node.js version (requires `>= 18.0.0`, recommends `>= 20.0.0` or `22.x/24.x`).
- Checks installed package managers (`pnpm`, `npm`, `yarn`, `bun`).
- Checks Git installation, current branch, and dirty working tree status.
- Checks Playwright browser installation status.

#### [NEW] [cli/commands/setup.js](file:///Users/milky/My%20Drive/GitHub/microsite/cli/commands/setup.js)
- Guided onboarding wizard when running `pnpm run setup`:
  1. Validates Node.js & package manager environment.
  2. Runs dependency installation (`pnpm install` or fallback `npm install`).
  3. Verifies `pnpm-workspace.yaml` build script approval.
  4. Prompts whether to install Playwright browser binaries (`chromium`).
  5. Runs quick typecheck & lint verification.
  6. Displays quickstart guidance with next actions.

#### [NEW] [cli/commands/dev.js](file:///Users/milky/My%20Drive/GitHub/microsite/cli/commands/dev.js)
- Spawns `next dev -p 2026`.
- Checks for port availability and cleans up zombie processes if necessary.
- Displays live local and network URLs with clean log forwarding.

#### [NEW] [cli/commands/test.js](file:///Users/milky/My%20Drive/GitHub/microsite/cli/commands/test.js)
- Subcommands & Interactive options:
  - `unit`: Run Vitest unit & component test suite.
  - `coverage`: Run full test coverage analysis with thresholds.
  - `e2e`: Run Playwright end-to-end browser specifications.
  - `e2e:ui`: Launch Playwright interactive test runner UI.
  - `ci`: Run full quality gate (`typecheck` + `lint` + `coverage` + `build`).

#### [NEW] [cli/commands/scaffold.js](file:///Users/milky/My%20Drive/GitHub/microsite/cli/commands/scaffold.js)
- Interactive scaffolding for [`src/config/site.config.ts`](file:///Users/milky/My%20Drive/GitHub/microsite/src/config/site.config.ts):
  - Add new Feature Bento tab with custom terminal commands or code snippets.
  - Add new Use Case story with role and video URL.
  - Add new Blog article with categories and reading time.
  - Update Brand title, description, and color theme.

#### [NEW] [cli/commands/git.js](file:///Users/milky/My%20Drive/GitHub/microsite/cli/commands/git.js)
- Shows concise git status.
- Interactive Conventional Commit generator (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`).
- Runs pre-push checks before committing.

#### [NEW] [cli/commands/help.js](file:///Users/milky/My%20Drive/GitHub/microsite/cli/commands/help.js)
- Unix-standard `--help` manual page detailing synopsis, arguments, subcommands, options, and examples.

#### [NEW] [cli/index.js](file:///Users/milky/My%20Drive/GitHub/microsite/cli/index.js)
- CLI router & argument dispatcher:
  - Parses flags: `-h, --help`, `-v, --version`, `-i, --interactive`, `-q, --quiet`, `--dry-run`.
  - Dispatches to subcommands (`setup`, `dev`, `test`, `scaffold`, `git`, `env`, `help`).
  - If no subcommand is provided, opens the rich interactive main menu loop.

---

### 2. Executable Launchers (`bin/`)

#### [NEW] [bin/cli.js](file:///Users/milky/My%20Drive/GitHub/microsite/bin/cli.js)
- `#!/usr/bin/env node` executable script delegating to `../cli/index.js`.

#### [NEW] [bin/setup.sh](file:///Users/milky/My%20Drive/GitHub/microsite/bin/setup.sh)
- Unix POSIX helper (`chmod +x bin/setup.sh`) for quick bootstrap from terminal.

#### [NEW] [bin/setup.cmd](file:///Users/milky/My%20Drive/GitHub/microsite/bin/setup.cmd)
- Windows batch helper for Windows terminal / cmd.exe.

---

### 3. Package & Project Configuration

#### [MODIFY] [package.json](file:///Users/milky/My%20Drive/GitHub/microsite/package.json)
- Add `"bin"` definitions for `./bin/cli.js` (`"microsite"`, `"gla"`, `"goldlabel"`).
- Add scripts:
  - `"setup": "node ./bin/cli.js setup"`
  - `"cli": "node ./bin/cli.js"`

#### [MODIFY] [README.md](file:///Users/milky/My%20Drive/GitHub/microsite/README.md)
- Document the new CLI and `pnpm run setup` quickstart flow.

---

## Verification Plan

### Automated Tests
- Create `cli/cli.test.js` covering:
  - Environment detection (`checkEnv` detects Node version, git, package manager).
  - CLI argument parsing & help output (`--help`, `-h`, `--version`).
  - Subcommand router dispatching (`help`, `env`, `test`, `scaffold`).
- Run `npm test` and `pnpm test` to verify zero regressions across all 21 test suites.

### Manual Verification
- Run `pnpm run setup` to test interactive setup flow.
- Run `pnpm run cli` to test interactive main menu loop.
- Run `node ./bin/cli.js --help` to verify Unix man-style output.
- Run `node ./bin/cli.js env` to test system checks.
- Run `node ./bin/cli.js test unit` and `node ./bin/cli.js dev --dry-run` to test subcommand execution.
