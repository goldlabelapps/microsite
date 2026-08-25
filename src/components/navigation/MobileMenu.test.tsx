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
    expect(screen.getByText("Platform")).toBeInTheDocument();
    expect(screen.getByText("Workflows")).toBeInTheDocument();
    expect(screen.getByText("Solutions")).toBeInTheDocument();
  });

  it("expands accordion subsections when tapped", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    await user.click(screen.getByLabelText(/toggle navigation menu/i));

    const platformAccordion = screen.getByRole("button", { name: /^platform/i });
    await user.click(platformAccordion);

    expect(screen.getByText("NX° Monorepo Core")).toBeInTheDocument();
    expect(screen.getByText("Pluggable Cartridges")).toBeInTheDocument();
  });
});
