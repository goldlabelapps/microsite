import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer component", () => {
  it("renders brand tagline, columns and bottom legal links", () => {
    render(<Footer />);
    expect(screen.getByText(/Rapidly build, compose, and operate modern web apps/i)).toBeInTheDocument();
    expect(screen.getByText("Platform")).toBeInTheDocument();
    expect(screen.getByText("Documentation")).toBeInTheDocument();
    expect(screen.getAllByText("Goldlabel").length).toBeGreaterThan(0);
    expect(screen.getByText(/© 2026 Goldlabel/i)).toBeInTheDocument();
  });
});
