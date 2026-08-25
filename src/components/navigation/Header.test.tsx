import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  it("renders brand logo and navigation links", () => {
    render(<Header />);
    expect(screen.getByLabelText("NX° by Goldlabel")).toBeInTheDocument();
    expect(screen.getByText("Platform")).toBeInTheDocument();
    expect(screen.getByText("Workflows")).toBeInTheDocument();
    expect(screen.getByText("Solutions")).toBeInTheDocument();
  });

  it("renders Studio link badge and Sign Up button", () => {
    render(<Header />);
    expect(screen.getByText(/Launch NX° Studio/i)).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
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
