import { test, expect } from "@playwright/test";

test.describe("Auth & Quick Install Flow", () => {
  test("displays email sign up form, action buttons, and shell quick installer", async ({ page }) => {
    // Grant clipboard permissions in browser context
    await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);

    await page.goto("/");

    const signupSection = page.locator("#signup");
    await expect(signupSection).toBeVisible();

    // Verify heading & email input
    await expect(signupSection.getByRole("heading", { name: /ready to build and scale with nx°/i })).toBeVisible();
    await expect(signupSection.getByPlaceholder(/enter your work email/i)).toBeVisible();

    // Verify CTAs
    await expect(signupSection.getByRole("link", { name: /sign up for nx° free/i })).toBeVisible();
    await expect(signupSection.getByRole("link", { name: /sign in to console/i })).toBeVisible();

    // Verify shell command box
    await expect(signupSection.getByText(/npx @goldlabelapps\/cli setup/i)).toBeVisible();

    // Verify copy button
    const copyBtn = signupSection.getByRole("button", { name: /copy/i });
    await expect(copyBtn).toBeVisible();
    await copyBtn.click();
    await expect(signupSection.getByText(/copied/i)).toBeVisible();
  });
});
