import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { DropdownMenu } from "./DropdownMenu";
import { NavItem } from "@/config/types";

const mockItem: NavItem = {
  label: "Products",
  dropdown: [
    {
      title: "Antigravity 2.0",
      description: "Command center for parallel agents",
      href: "#features",
      icon: "Layers",
      badge: "New",
    },
    {
      title: "External Docs",
      description: "API & SDK guide",
      href: "https://docs.google.com",
      external: true,
    },
  ],
};

describe("DropdownMenu component", () => {
  it("renders trigger button and toggles open state on hover", async () => {
    render(<DropdownMenu item={mockItem} />);
    const trigger = screen.getByRole("button", { name: /products/i });
    expect(trigger).toBeInTheDocument();

    // Hover to open
    fireEvent.mouseEnter(trigger.parentElement!);
    expect(screen.getByText("Antigravity 2.0")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
    expect(screen.getByText("External Docs")).toBeInTheDocument();

    // Mouse leave with timer
    vi.useFakeTimers();
    fireEvent.mouseLeave(trigger.parentElement!);
    act(() => {
      vi.advanceTimersByTime(200);
    });
    vi.useRealTimers();
  });

  it("toggles on click as well", () => {
    render(<DropdownMenu item={mockItem} />);
    const trigger = screen.getByRole("button", { name: /products/i });
    fireEvent.click(trigger);
    expect(screen.getByText("Antigravity 2.0")).toBeInTheDocument();
  });
});
