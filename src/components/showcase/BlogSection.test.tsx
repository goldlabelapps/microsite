import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BlogSection } from "./BlogSection";

describe("BlogSection component", () => {
  it("renders blog posts with category tags and dates", () => {
    render(<BlogSection />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(/Latest Blogs/i);
    expect(screen.getByText("Improving the Version Control Experience")).toBeInTheDocument();
  });

  it("navigates pagination slider", async () => {
    const user = userEvent.setup();
    render(<BlogSection />);

    const nextBtn = screen.getByLabelText(/next blog posts/i);
    await user.click(nextBtn);

    const prevBtn = screen.getByLabelText(/previous blog posts/i);
    await user.click(prevBtn);
  });
});
