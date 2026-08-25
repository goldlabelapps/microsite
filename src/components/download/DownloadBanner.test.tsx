import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { DownloadBanner } from "./DownloadBanner";

vi.mock("canvas-confetti", () => {
  return {
    default: vi.fn(),
  };
});

describe("DownloadBanner component", () => {
  let writeTextMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: writeTextMock },
      writable: true,
      configurable: true,
    });
  });

  it("renders download title, platforms, and copyable CLI command", () => {
    render(<DownloadBanner />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(/download google antigravity/i);
    expect(screen.getByText("Apple Silicon (M1/M2/M3/M4)")).toBeInTheDocument();
    expect(screen.getByText("Windows 11 / 10 (x64)")).toBeInTheDocument();
    expect(screen.getByText("Linux (.deb / .rpm / .AppImage)")).toBeInTheDocument();
  });

  it("handles platform download button clicks", () => {
    render(<DownloadBanner />);

    const downloadButtons = screen.getAllByRole("link", { name: /download/i });
    expect(downloadButtons.length).toBeGreaterThan(0);
    fireEvent.click(downloadButtons[0]);
  });

  it("copies CLI installation command", () => {
    render(<DownloadBanner />);

    const copyBtn = screen.getByRole("button", { name: /copy/i });
    fireEvent.click(copyBtn);
    expect(writeTextMock).toHaveBeenCalledWith(
      expect.stringContaining("curl -fsSL")
    );
  });
});
