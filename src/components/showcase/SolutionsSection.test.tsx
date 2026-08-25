import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SolutionsSection } from "./SolutionsSection";

describe("SolutionsSection component", () => {
  it("renders both developer and organization tiers", () => {
    render(<SolutionsSection />);
    expect(screen.getByText("For Developers")).toBeInTheDocument();
    expect(screen.getByText("For Organizations")).toBeInTheDocument();
    expect(screen.getByText("Launch Your Next Project")).toBeInTheDocument();
    expect(screen.getByText("Scale Multiple Products")).toBeInTheDocument();
  });
});
