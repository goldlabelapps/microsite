import { test, expect } from "@playwright/test";

test.describe("Landing Page — Core Smoke & Rendering", () => {
  test("renders the full microsite with title and meta tags", async ({ page }) => {
    await page.goto("/");

    // Verify page title
    await expect(page).toHaveTitle(/Google Antigravity/i);

    // Verify header logo
    const logo = page.locator("svg[aria-label='Google Antigravity']");
    await expect(logo.first()).toBeVisible();

    // Verify hero headline
    const headline = page.locator("h1");
    await expect(headline).toContainText(/Experience liftoff/i);

    // Verify core sections exist on the page
    await expect(page.locator("text=Google Antigravity is our agentic development platform")).toBeVisible();
    await expect(page.locator("text=Built for developers for the agent-first era").first()).toBeVisible();
    await expect(page.locator("text=Download Google Antigravity").first()).toBeVisible();
  });

  test("smoothly scrolls to sections when navigation anchors are clicked", async ({ page }) => {
    await page.goto("/");

    // Click "Explore use cases" in hero
    const exploreBtn = page.getByRole("link", { name: /explore use cases/i });
    await exploreBtn.click();

    // Verify target section is in viewport or URL hash updated
    await expect(page).toHaveURL(/#use-cases/);
  });
});
