import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LogoContextMenu } from "./LogoContextMenu";

describe("LogoContextMenu", () => {
  let writeTextMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: writeTextMock },
      writable: true,
      configurable: true,
    });
  });

  it("renders Google Antigravity logo link", () => {
    render(<LogoContextMenu />);
    expect(screen.getByLabelText("Google Antigravity")).toBeInTheDocument();
  });

  it("opens context menu on right click and handles SVG copying", () => {
    render(<LogoContextMenu />);

    const logoLink = screen.getByLabelText("Google Antigravity");
    const container = logoLink.closest("div")!;
    fireEvent.contextMenu(container, { clientX: 150, clientY: 50 });

    expect(screen.getByText(/Copy Logo as SVG/i)).toBeInTheDocument();
    expect(screen.getByText(/Press Guidelines/i)).toBeInTheDocument();

    const copyBtn = screen.getByRole("button", { name: /copy logo as svg/i });
    fireEvent.click(copyBtn);
    expect(writeTextMock).toHaveBeenCalled();
  });

  it("closes context menu when clicking outside or scrolling", () => {
    render(
      <div>
        <LogoContextMenu />
        <div data-testid="outside">Outside Element</div>
      </div>
    );

    const logoLink = screen.getByLabelText("Google Antigravity");
    const container = logoLink.closest("div")!;
    fireEvent.contextMenu(container, { clientX: 100, clientY: 50 });
    expect(screen.getByText(/Copy Logo as SVG/i)).toBeInTheDocument();

    // Click outside
    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(screen.queryByText(/Copy Logo as SVG/i)).not.toBeInTheDocument();
  });
});
