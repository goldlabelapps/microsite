import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroSection } from "./HeroSection";

describe("HeroSection component", () => {
  it("renders hero headline, subtitle and CTAs", () => {
    render(<HeroSection />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/build and operate web apps from one unified platform/i);
    expect(screen.getByText("Sign Up Free")).toBeInTheDocument();
    expect(screen.getByText("Sign In to Console")).toBeInTheDocument();
  });

  it("renders interactive Monorepo Console showcase frame with live workspace cards", () => {
    render(<HeroSection />);
    expect(screen.getByText("apps/www")).toBeInTheDocument();
    expect(screen.getByText("apps/cms")).toBeInTheDocument();
    expect(screen.getByText("uberedux")).toBeInTheDocument();
    expect(screen.getByText(/Operational • 4 Cartridges/i)).toBeInTheDocument();
  });
});
