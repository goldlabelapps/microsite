import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { FeatureExplorer } from "./FeatureExplorer";

describe("FeatureExplorer component", () => {
  let writeTextMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: writeTextMock },
      writable: true,
      configurable: true,
    });
  });

  it("renders feature tabs and default active preview", () => {
    render(<FeatureExplorer />);
    expect(screen.getByRole("button", { name: /antigravity 2.0/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /antigravity cli/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /antigravity ide/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /antigravity sdk/i })).toBeInTheDocument();
  });

  it("switches to CLI tab and displays terminal snippet with copy button", () => {
    render(<FeatureExplorer />);

    const cliTab = screen.getByRole("button", { name: /antigravity cli/i });
    fireEvent.click(cliTab);

    expect(screen.getByText(/Refactor auth middleware to use Ed25519 tokens/i)).toBeInTheDocument();

    const copyBtns = screen.getAllByTitle(/copy command/i);
    expect(copyBtns.length).toBeGreaterThan(0);
    fireEvent.click(copyBtns[0]);
    expect(writeTextMock).toHaveBeenCalled();
  });

  it("switches to SDK tab and displays Python code snippet", () => {
    render(<FeatureExplorer />);

    const sdkTab = screen.getByRole("button", { name: /antigravity sdk/i });
    fireEvent.click(sdkTab);

    expect(screen.getByText(/from antigravity import Agent/i)).toBeInTheDocument();

    const copyBtn = screen.getByRole("button", { name: /copy code/i });
    fireEvent.click(copyBtn);
    expect(writeTextMock).toHaveBeenCalled();
  });
});
