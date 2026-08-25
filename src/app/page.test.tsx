import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage assembly", () => {
  it("renders all core microsite sections in order", () => {
    render(<HomePage />);

    // 1. Hero
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/experience liftoff/i);

    // 2. Statement
    expect(screen.getByText(/Google Antigravity is our agentic development platform/i)).toBeInTheDocument();

    // 3. Feature Explorer
    expect(screen.getByRole("button", { name: /antigravity 2.0/i })).toBeInTheDocument();

    // 4. Use Cases
    expect(screen.getAllByText("Full stack developer").length).toBeGreaterThan(0);

    // 5. Solutions
    expect(screen.getByText("Achieve new heights")).toBeInTheDocument();

    // 6. Blogs
    expect(screen.getByText(/Latest Blogs/i)).toBeInTheDocument();

    // 7. Download
    expect(screen.getByText("Apple Silicon (M1/M2/M3/M4)")).toBeInTheDocument();
  });
});
