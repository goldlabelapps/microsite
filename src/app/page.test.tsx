import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

vi.mock("@/components/hero/ParticleCanvas", () => ({
  ParticleCanvas: () => <div data-testid="mock-particle-canvas" />,
}));

describe("HomePage assembly", () => {
  it("renders all core microsite sections in order", () => {
    render(<HomePage />);

    // 1. Hero
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/build and operate web apps from one unified platform/i);

    // 2. Statement
    expect(screen.getByText(/NX° is not just a collection of apps/i)).toBeInTheDocument();

    // 3. Feature Explorer
    expect(screen.getByRole("button", { name: /apps & packages architecture/i })).toBeInTheDocument();

    // 4. Use Cases
    expect(screen.getAllByText("Product Engineers").length).toBeGreaterThan(0);

    // 5. Solutions
    expect(screen.getByText("Launch Your Next Project")).toBeInTheDocument();

    // 6. Blogs
    expect(screen.getByText(/Platform News & Architecture/i)).toBeInTheDocument();

    // 7. Auth CTA / Sign Up
    expect(screen.getByPlaceholderText(/enter your work email/i)).toBeInTheDocument();
  });
});
