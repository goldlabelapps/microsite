import { test, expect } from "@playwright/test";

test.describe("Bento Feature Explorer", () => {
  test("switches between feature tabs and interacts with code snippets", async ({ page }) => {
    await page.goto("/");

    const featureSection = page.locator("#features");
    await expect(featureSection).toBeVisible();

    // 1. Antigravity 2.0 (Default active)
    await expect(featureSection.getByRole("button", { name: /antigravity 2.0/i })).toBeVisible();
    await expect(page.getByText(/Your command center to manage multiple local agents/i)).toBeVisible();

    // 2. Switch to Antigravity CLI
    const cliTab = featureSection.getByRole("button", { name: /antigravity cli/i });
    await cliTab.click();
    await expect(page.getByText(/The lightweight, fast, terminal-first surface/i)).toBeVisible();
    await expect(page.getByText(/Refactor auth middleware to use Ed25519 tokens/i)).toBeVisible();

    // 3. Switch to Antigravity IDE
    const ideTab = featureSection.getByRole("button", { name: /antigravity ide/i });
    await ideTab.click();
    await expect(page.getByText(/The fully-featured, agentic IDE/i)).toBeVisible();

    // 4. Switch to Antigravity SDK
    const sdkTab = featureSection.getByRole("button", { name: /antigravity sdk/i });
    await sdkTab.click();
    await expect(page.getByText(/Prototype custom agents leveraging Antigravity/i)).toBeVisible();
    await expect(page.getByText(/from antigravity import Agent/i)).toBeVisible();
  });
});
