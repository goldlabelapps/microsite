import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer component", () => {
  it("renders brand tagline, columns and bottom legal links", () => {
    render(<Footer />);
    expect(screen.getByText(/Experience liftoff with the next-gen agent platform/i)).toBeInTheDocument();
    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByText("Resources")).toBeInTheDocument();
    expect(screen.getAllByText("About Google").length).toBeGreaterThan(0);
    expect(screen.getByText(/© 2026 Google LLC/i)).toBeInTheDocument();
  });
});
