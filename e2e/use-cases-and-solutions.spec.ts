import { test, expect } from "@playwright/test";

test.describe("Use Cases & Solutions Tiers", () => {
  test("interacts with Developer Use Cases carousel and platform blueprint panel", async ({ page }) => {
    await page.goto("/#use-cases");

    const useCasesSection = page.locator("#use-cases");
    await expect(useCasesSection).toBeVisible();

    // Verify developer roles are rendered
    await expect(useCasesSection.getByText("Product Engineers").first()).toBeVisible();
    await expect(useCasesSection.getByText("Founders & Operators").first()).toBeVisible();
    await expect(useCasesSection.getByText("Platform Architects").first()).toBeVisible();

    // Verify architecture blueprint card
    await expect(useCasesSection.getByText("Platform Blueprint").first()).toBeVisible();
    await expect(useCasesSection.getByText("Targeted Architecture").first()).toBeVisible();
  });

  test("displays pricing and solution tiers with CTA buttons", async ({ page }) => {
    await page.goto("/#solutions");

    const solutionsSection = page.locator("#solutions");
    await expect(solutionsSection).toBeVisible();

    await expect(solutionsSection.getByText("For Developers", { exact: true })).toBeVisible();
    await expect(solutionsSection.getByText("For Organizations", { exact: true })).toBeVisible();
    await expect(solutionsSection.getByRole("link", { name: /^sign up/i })).toBeVisible();
    await expect(solutionsSection.getByRole("link", { name: /contact team/i })).toBeVisible();
  });
});
