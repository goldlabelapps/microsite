import { test, expect } from "@playwright/test";

test.describe("Navigation & Dropdown Menus", () => {
  test("interacts with desktop navigation dropdowns", async ({ page, isMobile }) => {
    if (isMobile) test.skip();

    await page.goto("/");

    // Hover on "Products" dropdown button
    const productsBtn = page.getByRole("button", { name: "Products" });
    await productsBtn.hover();

    // Verify dropdown items appear
    await expect(page.getByText("Antigravity 2.0").first()).toBeVisible();
    await expect(page.getByText("Antigravity CLI").first()).toBeVisible();

    // Hover on "Use Cases" dropdown button
    const useCasesBtn = page.getByRole("button", { name: "Use Cases" });
    await useCasesBtn.hover();
    await expect(page.getByText("Fullstack Engineering").first()).toBeVisible();
  });

  test("opens logo context menu on right click and copies SVG", async ({ page }) => {
    await page.goto("/");

    // Grant clipboard permissions in browser context
    await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);

    const logo = page.locator("svg[aria-label='Google Antigravity']").first();
    await logo.click({ button: "right" });

    // Verify context menu options
    const copyOption = page.getByText(/Copy Logo as SVG/i);
    await expect(copyOption).toBeVisible();

    await copyOption.click();
    await expect(page.getByText(/Copied SVG!/i)).toBeVisible();
  });

  test("opens mobile navigation drawer and expands submenus on mobile viewports", async ({ page, isMobile }) => {
    if (!isMobile) {
      await page.setViewportSize({ width: 375, height: 667 });
    }

    await page.goto("/");

    // Click mobile menu hamburger button
    const menuBtn = page.getByLabel("Toggle navigation menu");
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();

    // Verify drawer contents
    await expect(page.getByRole("button", { name: "Products" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Use Cases" })).toBeVisible();

    // Click Products accordion to expand
    await page.getByRole("button", { name: "Products" }).click();
    await expect(page.getByText("Antigravity 2.0").first()).toBeVisible();
  });
});
