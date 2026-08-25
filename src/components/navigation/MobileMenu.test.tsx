import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileMenu } from "./MobileMenu";

describe("MobileMenu component", () => {
  it("renders menu trigger button and opens mobile navigation drawer", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    const toggleBtn = screen.getByLabelText(/toggle navigation menu/i);
    expect(toggleBtn).toBeInTheDocument();

    await user.click(toggleBtn);

    // Should reveal links
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Use Cases")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
  });

  it("expands accordion subsections when tapped", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    await user.click(screen.getByLabelText(/toggle navigation menu/i));

    const productsAccordion = screen.getByRole("button", { name: /^products/i });
    await user.click(productsAccordion);

    expect(screen.getByText("Antigravity 2.0")).toBeInTheDocument();
    expect(screen.getByText("Antigravity CLI")).toBeInTheDocument();
  });
});
