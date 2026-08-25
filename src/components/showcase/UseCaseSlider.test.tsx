import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UseCaseSlider } from "./UseCaseSlider";

describe("UseCaseSlider component", () => {
  it("renders use case roles and slider buttons", () => {
    render(<UseCaseSlider />);
    expect(screen.getAllByText("Product Engineers").length).toBeGreaterThan(0);
    expect(screen.getByText("Founders & Operators")).toBeInTheDocument();
    expect(screen.getByText("Platform Architects")).toBeInTheDocument();
  });

  it("navigates slider with previous and next buttons", async () => {
    const user = userEvent.setup();
    render(<UseCaseSlider />);

    const nextBtn = screen.getByLabelText(/next use case/i);
    await user.click(nextBtn);

    const prevBtn = screen.getByLabelText(/previous use case/i);
    await user.click(prevBtn);
  });

  it("opens video modal when clicking watch case", async () => {
    const user = userEvent.setup();
    render(<UseCaseSlider />);

    const watchBtns = screen.getAllByRole("button", { name: /view case/i });
    await user.click(watchBtns[0]);

    expect(screen.getByTitle(/Product Engineers Demo/i)).toBeInTheDocument();
  });
});
