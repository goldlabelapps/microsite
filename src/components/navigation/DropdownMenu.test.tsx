import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { DropdownMenu } from "./DropdownMenu";
import { NavItem } from "@/config/types";

const mockItem: NavItem = {
  label: "Platform",
  dropdown: [
    {
      title: "NX° Monorepo Core",
      description: "Modular fullstack application platform",
      href: "#features",
      icon: "Layers",
      badge: "v3.0",
    },
    {
      title: "External Docs",
      description: "Architecture & Cartridges guide",
      href: "https://goldlabel.pro/docs",
      external: true,
    },
  ],
};

describe("DropdownMenu component", () => {
  it("renders trigger button and toggles open state on hover", async () => {
    render(<DropdownMenu item={mockItem} />);
    const trigger = screen.getByRole("button", { name: /platform/i });
    expect(trigger).toBeInTheDocument();

    // Hover to open
    fireEvent.mouseEnter(trigger.parentElement!);
    expect(screen.getByText("NX° Monorepo Core")).toBeInTheDocument();
    expect(screen.getByText("v3.0")).toBeInTheDocument();
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
    const trigger = screen.getByRole("button", { name: /platform/i });
    fireEvent.click(trigger);
    expect(screen.getByText("NX° Monorepo Core")).toBeInTheDocument();
  });
});
