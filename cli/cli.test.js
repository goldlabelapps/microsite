import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { parseArgs, runCli } from "./index.js";
import { checkEnv } from "./env.js";
import { colors, log } from "./terminal.js";

describe("CLI Argument Parser", () => {
  it("parses flags and positional arguments accurately", () => {
    const res = parseArgs(["test", "coverage", "--quiet", "--dry-run"]);
    expect(res.command).toBe("test");
    expect(res.subcommand).toBe("coverage");
    expect(res.flags.quiet).toBe(true);
    expect(res.flags.dryRun).toBe(true);
    expect(res.flags.help).toBe(false);
  });

  it("handles short flags correctly", () => {
    const res = parseArgs(["-h", "-v", "-i", "-q", "-y"]);
    expect(res.flags.help).toBe(true);
    expect(res.flags.version).toBe(true);
    expect(res.flags.interactive).toBe(true);
    expect(res.flags.quiet).toBe(true);
    expect(res.flags.yes).toBe(true);
  });
});

describe("CLI Environment Validator", () => {
  it("detects current node version and system environment", () => {
    const env = checkEnv();
    expect(env.node.major).toBeGreaterThanOrEqual(18);
    expect(env.node.supported).toBe(true);
    expect(env.os.platform).toBeDefined();
    expect(env.packageManagers.preferred).toBeDefined();
  });
});

describe("CLI Non-Interactive Command Dispatcher", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("outputs version when --version flag is passed", async () => {
    await runCli(["--version"]);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("microsite / gla v0.1.1"));
  });

  it("outputs help manual when --help flag is passed", async () => {
    await runCli(["--help"]);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("SYNOPSIS"));
  });

  it("runs env diagnostics without error", async () => {
    await runCli(["env", "--quiet"]);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Environment & Toolchain Diagnostics"));
  });

  it("supports dry-run on test command", async () => {
    await runCli(["test", "unit", "--dry-run", "--quiet"]);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("[DRY-RUN]"));
  });

  it("supports dry-run on dev command", async () => {
    await runCli(["dev", "--dry-run", "--quiet"]);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("[DRY-RUN]"));
  });

  it("supports dry-run on push command with CI quality gate", async () => {
    await runCli(["push", "--dry-run", "--quiet", "--yes"]);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("[DRY-RUN]"));
  });

  it("handles unknown commands gracefully", async () => {
    const errorSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await runCli(["unknown-command"]);
    expect(process.exitCode).toBe(1);
    process.exitCode = 0;
    errorSpy.mockRestore();
  });
});

describe("CLI Terminal Utilities", () => {
  it("has ANSI colors defined", () => {
    expect(colors.reset).toBe("\x1b[0m");
    expect(colors.bold).toBe("\x1b[1m");
    expect(colors.brightGreen).toBe("\x1b[92m");
  });

  it("provides log helpers without throwing", () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    log.info("info test");
    log.success("success test");
    log.warn("warn test");
    log.error("error test");
    log.step(1, 3, "step test");
    log.highlight("label", "value");
    log.divider();
    expect(logSpy).toHaveBeenCalledTimes(7);
    logSpy.mockRestore();
  });
});
