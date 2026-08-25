import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SolutionsSection } from "./SolutionsSection";

describe("SolutionsSection component", () => {
  it("renders both developer and organization tiers", () => {
    render(<SolutionsSection />);
    expect(screen.getByText("For developers")).toBeInTheDocument();
    expect(screen.getByText("For organizations")).toBeInTheDocument();
    expect(screen.getByText("Achieve new heights")).toBeInTheDocument();
    expect(screen.getByText("Level up your entire team")).toBeInTheDocument();
  });
});
