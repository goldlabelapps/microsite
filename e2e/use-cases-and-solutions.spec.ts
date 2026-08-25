import { test, expect } from "@playwright/test";

test.describe("Use Cases & Solutions Tiers", () => {
  test("interacts with Developer Use Cases carousel and video triggers", async ({ page }) => {
    await page.goto("/#use-cases");

    const useCasesSection = page.locator("#use-cases");
    await expect(useCasesSection).toBeVisible();

    // Verify developer roles are rendered
    await expect(useCasesSection.getByText("Product Engineers").first()).toBeVisible();
    await expect(useCasesSection.getByText("Founders & Operators").first()).toBeVisible();
    await expect(useCasesSection.getByText("Platform Architects").first()).toBeVisible();

    // Click on a "View case" video trigger
    const viewCaseBtns = useCasesSection.getByRole("button", { name: /view case/i });
    await viewCaseBtns.first().click();

    // Verify video modal opens with role title
    const modalIframe = page.locator("iframe[title*='Story'], iframe[title*='Demo']");
    await expect(modalIframe.first()).toBeVisible();

    // Dismiss modal
    await page.keyboard.press("Escape");
  });

  test("displays pricing and solution tiers with CTA buttons", async ({ page }) => {
    await page.goto("/#solutions");

    const solutionsSection = page.locator("#solutions");
    await expect(solutionsSection).toBeVisible();

    await expect(solutionsSection.getByText("For Developers", { exact: true })).toBeVisible();
    await expect(solutionsSection.getByText("For Organizations", { exact: true })).toBeVisible();
    await expect(solutionsSection.getByRole("link", { name: /sign up free/i })).toBeVisible();
    await expect(solutionsSection.getByRole("link", { name: /contact team/i })).toBeVisible();
  });
});
