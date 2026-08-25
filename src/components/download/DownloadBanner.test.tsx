import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { DownloadBanner } from "./DownloadBanner";

vi.mock("canvas-confetti", () => {
  return {
    default: vi.fn(),
  };
});

describe("DownloadBanner / AuthCtaBanner component", () => {
  let writeTextMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: writeTextMock },
      writable: true,
      configurable: true,
    });
  });

  it("renders auth CTA title, email form, and copyable CLI command", () => {
    render(<DownloadBanner />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(/ready to build and scale with nx°/i);
    expect(screen.getByPlaceholderText(/enter your work email/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /get started/i })).toBeInTheDocument();
    expect(screen.getByText("Sign Up for NX° Free")).toBeInTheDocument();
    expect(screen.getByText("Sign In to Console")).toBeInTheDocument();
  });

  it("handles email sign-up submission", () => {
    render(<DownloadBanner />);

    const emailInput = screen.getByPlaceholderText(/enter your work email/i);
    fireEvent.change(emailInput, { target: { value: "developer@goldlabel.pro" } });

    const submitBtn = screen.getByRole("button", { name: /get started/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/Access link sent to developer@goldlabel.pro/i)).toBeInTheDocument();
  });

  it("copies CLI installation command", () => {
    render(<DownloadBanner />);

    const copyBtn = screen.getByRole("button", { name: /copy/i });
    fireEvent.click(copyBtn);
    expect(writeTextMock).toHaveBeenCalledWith(
      expect.stringContaining("npx @goldlabelapps/cli setup")
    );
  });
});
