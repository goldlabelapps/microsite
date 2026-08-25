import { test, expect } from "@playwright/test";

test.describe("Navigation & Dropdown Menus", () => {
  test("interacts with desktop navigation dropdowns", async ({ page, isMobile }) => {
    if (isMobile) test.skip();

    await page.goto("/");

    // Hover on "Platform" dropdown button
    const platformBtn = page.getByRole("button", { name: "Platform", exact: true });
    await platformBtn.hover();

    // Verify dropdown items appear
    await expect(page.getByText("NX° Monorepo Core").first()).toBeVisible();
    await expect(page.getByText("Pluggable Cartridges").first()).toBeVisible();

    // Hover on "Workflows" dropdown button
    const workflowsBtn = page.getByRole("button", { name: "Workflows", exact: true });
    await workflowsBtn.hover();
    await expect(page.getByText("Product Engineers").first()).toBeVisible();
  });

  test("opens logo context menu on right click and copies SVG", async ({ page }) => {
    await page.goto("/");

    // Grant clipboard permissions in browser context
    await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);

    const logo = page.getByLabel("NX° by Goldlabel").first();
    await logo.click({ button: "right" });

    // Verify context menu options
    const copyOption = page.getByText(/Copy NX° Logo as SVG/i);
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
    await expect(page.getByRole("button", { name: "Platform", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "Workflows", exact: true })).toBeVisible();

    // Click Platform accordion to expand
    await page.getByRole("button", { name: "Platform", exact: true }).click();
    await expect(page.getByText("NX° Monorepo Core").first()).toBeVisible();
  });

  test("defaults to light theme and toggles to dark theme explicitly", async ({ page }) => {
    await page.goto("/");

    // Verify html element does NOT have 'dark' class initially
    const htmlElement = page.locator("html");
    await expect(htmlElement).not.toHaveClass(/dark/);

    // Click theme toggle button
    const themeBtn = page.getByRole("button", { name: /switch to dark theme/i }).first();
    await expect(themeBtn).toBeVisible();
    await themeBtn.click();

    // Verify html element now has 'dark' class
    await expect(htmlElement).toHaveClass(/dark/);

    // Click again to return to light theme
    const lightBtn = page.getByRole("button", { name: /switch to light theme/i }).first();
    await lightBtn.click();
    await expect(htmlElement).not.toHaveClass(/dark/);
  });
});
