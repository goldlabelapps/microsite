import { test, expect } from "@playwright/test";

test.describe("Bento Feature Explorer", () => {
  test("switches between feature tabs and interacts with code snippets", async ({ page }) => {
    await page.goto("/");

    const featureSection = page.locator("#features");
    await expect(featureSection).toBeVisible();

    // 1. Monorepo Core (Default active)
    await expect(featureSection.getByRole("button", { name: /apps & packages architecture/i })).toBeVisible();
    await expect(featureSection.getByRole("heading", { name: "Apps & Packages Architecture" })).toBeVisible();
    await expect(featureSection.getByText(/Organized into clear surfaces/i).first()).toBeVisible();

    // 2. Switch to Cartridges
    const cartridgeTab = featureSection.getByRole("button", { name: /pluggable cartridges/i });
    await cartridgeTab.click();
    await expect(featureSection.getByRole("heading", { name: "Pluggable Cartridges" })).toBeVisible();
    await expect(featureSection.getByText(/createCartridge/i)).toBeVisible();

    // 3. Switch to Uberedux State
    const ubereduxTab = featureSection.getByRole("button", { name: /uberedux state engine/i });
    await ubereduxTab.click();
    await expect(featureSection.getByRole("heading", { name: "Uberedux State Engine" })).toBeVisible();
    await expect(featureSection.getByText(/Uberedux active/i)).toBeVisible();

    // 4. Switch to Design System
    const dsTab = featureSection.getByRole("button", { name: /goldlabel design system/i });
    await dsTab.click();
    await expect(featureSection.getByRole("heading", { name: "Goldlabel Design System" })).toBeVisible();
    await expect(featureSection.getByText(/NX° Design Tokens/i)).toBeVisible();
  });
});
