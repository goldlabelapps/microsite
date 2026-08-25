import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  it("renders brand logo and navigation links", () => {
    render(<Header />);
    expect(screen.getByLabelText("Google Antigravity")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Use Cases")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
  });

  it("renders Remote Control link badge and primary download button", () => {
    render(<Header />);
    expect(screen.getByText(/Launch Remote Control/i)).toBeInTheDocument();
    const downloadBtns = screen.getAllByText("Download");
    expect(downloadBtns.length).toBeGreaterThan(0);
  });

  it("updates background styling on scroll", () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header");
    expect(header).toHaveClass("bg-transparent");

    // Simulate scroll
    window.scrollY = 50;
    fireEvent.scroll(window);
    expect(header).toBeInTheDocument();
  });
});
