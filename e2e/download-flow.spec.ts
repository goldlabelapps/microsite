import { test, expect } from "@playwright/test";

test.describe("Download & Quick Install Flow", () => {
  test("displays all supported platforms and shell quick installer", async ({ page }) => {
    // Grant clipboard permissions in browser context
    await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);

    await page.goto("/");

    const downloadSection = page.locator("#download");
    await expect(downloadSection).toBeVisible();

    // Verify platform cards by heading
    await expect(downloadSection.getByRole("heading", { name: /Apple Silicon/i })).toBeVisible();
    await expect(downloadSection.getByRole("heading", { name: /Intel Mac/i })).toBeVisible();
    await expect(downloadSection.getByRole("heading", { name: /Windows/i })).toBeVisible();
    await expect(downloadSection.getByRole("heading", { name: /Linux/i })).toBeVisible();

    // Verify shell command box
    await expect(downloadSection.getByText(/curl -fsSL/i)).toBeVisible();

    // Verify copy button
    const copyBtn = downloadSection.getByRole("button", { name: /copy/i });
    await expect(copyBtn).toBeVisible();
    await copyBtn.click();
    await expect(downloadSection.getByText(/copied/i)).toBeVisible();
  });
});
