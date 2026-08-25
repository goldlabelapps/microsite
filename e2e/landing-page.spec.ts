import { test, expect } from "@playwright/test";

test.describe("Landing Page — Core Smoke & Rendering", () => {
  test("renders the full microsite with title and meta tags", async ({ page }) => {
    await page.goto("/");

    // Verify page title
    await expect(page).toHaveTitle(/NX°/i);

    // Verify header logo
    const logo = page.getByLabel("NX° by Goldlabel");
    await expect(logo.first()).toBeVisible();

    // Verify hero headline
    const headline = page.locator("h1");
    await expect(headline).toContainText(/Build and operate web apps from one unified platform/i);

    // Verify core sections exist on the page
    await expect(page.locator("text=NX° is not just a collection of apps").first()).toBeVisible();
    await expect(page.locator("text=Tailored for the Modern Development Team").first()).toBeVisible();
    await expect(page.locator("text=Ready to Build and Scale with NX°?").first()).toBeVisible();
  });

  test("smoothly navigates to Sign In / Sign Up portals", async ({ page }) => {
    await page.goto("/");

    const signUpBtn = page.getByRole("link", { name: /^sign up free$/i }).first();
    await expect(signUpBtn).toBeVisible();

    const signInBtn = page.getByRole("link", { name: /^sign in to console$/i }).first();
    await expect(signInBtn).toBeVisible();
  });

  test("serves valid PWA manifest and apple-touch-icon head tags", async ({ page }) => {
    await page.goto("/");

    // Verify manifest link
    const manifestLink = page.locator("link[rel='manifest']");
    await expect(manifestLink).toHaveAttribute("href", /\/manifest\.(webmanifest|json)/);

    // Verify apple touch icon link
    const appleIcon = page.locator("link[rel='apple-touch-icon']");
    await expect(appleIcon).toHaveAttribute("href", "/apple-touch-icon.png");

    // Verify twitter image & og image
    const twitterImg = page.locator("meta[name='twitter:image']");
    await expect(twitterImg).toHaveAttribute("content", /apps\.png/);
  });
});
