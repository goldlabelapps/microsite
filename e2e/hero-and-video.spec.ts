import { test, expect } from "@playwright/test";

test.describe("Hero & Monorepo Console Showcase", () => {
  test("displays hero headline, CTAs, and interactive Monorepo Console frame", async ({ page }) => {
    await page.goto("/");

    // Verify hero headline
    await expect(page.locator("h1")).toContainText(/Build and operate web apps from one unified platform/i);

    // Verify live console workspace cards
    await expect(page.getByText("apps/www").first()).toBeVisible();
    await expect(page.getByText("apps/cms").first()).toBeVisible();
    await expect(page.getByText("uberedux").first()).toBeVisible();
    await expect(page.getByText(/Operational • 4 Cartridges/i).first()).toBeVisible();
  });
});
