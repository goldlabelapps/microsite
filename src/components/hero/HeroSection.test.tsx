import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HeroSection } from "./HeroSection";

describe("HeroSection component", () => {
  it("renders hero headline, subtitle and CTAs", () => {
    render(<HeroSection />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/build and operate web apps from one unified platform/i);
    expect(screen.getByText("Sign Up Free")).toBeInTheDocument();
    expect(screen.getByText("Sign In to Console")).toBeInTheDocument();
  });

  it("opens video modal when clicking product preview card", async () => {
    const user = userEvent.setup();
    render(<HeroSection />);

    const videoCard = screen.getByText(/NX° Platform Walkthrough & Architecture/i);
    await user.click(videoCard);

    // Modal iframe should be in the document
    expect(screen.getByTitle("NX° Platform Walkthrough & Architecture")).toBeInTheDocument();
  });
});
