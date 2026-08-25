import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HeroSection } from "./HeroSection";

describe("HeroSection component", () => {
  it("renders hero headline, subtitle and CTAs", () => {
    render(<HeroSection />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/experience liftoff with the next-gen agent platform/i);
    expect(screen.getByText("Explore use cases")).toBeInTheDocument();
  });

  it("opens video modal when clicking product preview card", async () => {
    const user = userEvent.setup();
    render(<HeroSection />);

    const videoCard = screen.getByText(/Google Antigravity Launch & Walkthrough/i);
    await user.click(videoCard);

    // Modal iframe should be in the document
    expect(screen.getByTitle("Google Antigravity Launch & Walkthrough")).toBeInTheDocument();
  });
});
