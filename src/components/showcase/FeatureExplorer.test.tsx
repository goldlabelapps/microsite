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
    expect(screen.getByRole("button", { name: /apps & packages architecture/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /pluggable cartridges/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /uberedux state engine/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /goldlabel design system/i })).toBeInTheDocument();
  });

  it("switches to Uberedux state tab and displays terminal snippet with copy button", () => {
    render(<FeatureExplorer />);

    const ubereduxTab = screen.getByRole("button", { name: /uberedux state engine/i });
    fireEvent.click(ubereduxTab);

    expect(screen.getByText(/Uberedux active/i)).toBeInTheDocument();

    const copyBtns = screen.getAllByTitle(/copy command/i);
    expect(copyBtns.length).toBeGreaterThan(0);
    fireEvent.click(copyBtns[0]);
    expect(writeTextMock).toHaveBeenCalled();
  });

  it("switches to Cartridges tab and displays TypeScript code snippet", () => {
    render(<FeatureExplorer />);

    const cartridgeTab = screen.getByRole("button", { name: /pluggable cartridges/i });
    fireEvent.click(cartridgeTab);

    expect(screen.getByText(/createCartridge/i)).toBeInTheDocument();

    const copyBtn = screen.getByRole("button", { name: /copy code/i });
    fireEvent.click(copyBtn);
    expect(writeTextMock).toHaveBeenCalled();
  });
});
