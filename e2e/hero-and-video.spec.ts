import { test, expect } from "@playwright/test";

test.describe("Hero & Video Modal Showcase", () => {
  test("displays hero video showcase and opens interactive video lightbox modal", async ({ page }) => {
    await page.goto("/");

    // Locate product video card
    const videoCard = page.getByText(/NX° Platform Walkthrough & Architecture/i);
    await expect(videoCard).toBeVisible();

    // Click to open modal
    await videoCard.click();

    // Verify modal dialog & YouTube iframe
    const modalIframe = page.locator("iframe[title='NX° Platform Walkthrough & Architecture']");
    await expect(modalIframe).toBeVisible();

    // Close modal via close button
    const closeBtn = page.getByLabel("Close modal");
    await closeBtn.click();
    await expect(modalIframe).not.toBeVisible();
  });

  test("closes video modal when ESC key is pressed", async ({ page }) => {
    await page.goto("/");

    const videoCard = page.getByText(/NX° Platform Walkthrough & Architecture/i);
    await videoCard.click();

    const modalIframe = page.locator("iframe[title='NX° Platform Walkthrough & Architecture']");
    await expect(modalIframe).toBeVisible();

    // Press Escape key
    await page.keyboard.press("Escape");
    await expect(modalIframe).not.toBeVisible();
  });
});
