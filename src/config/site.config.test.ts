import { describe, it, expect } from "vitest";
import { siteConfig } from "./site.config";

describe("siteConfig", () => {

  it("has valid brand configuration and logo menu", () => {
    expect(siteConfig.brand.name).toBe("NX°");
    expect(siteConfig.brand.contextMenu.enabled).toBe(true);
    expect(siteConfig.brand.contextMenu.copySvgLabel).toBe("Copy NX° Logo as SVG");
  });

  it("has valid PWA configuration with brand assets and theme tokens", () => {
    expect(siteConfig.pwa.enabled).toBe(true);
    expect(siteConfig.pwa.appleTouchIcon).toBe("/apple-touch-icon.png");
    expect(siteConfig.pwa.favicon).toBe("/favicon.svg");
    expect(siteConfig.pwa.name).toBe("NX° by Goldlabel");
    expect(siteConfig.pwa.shortName).toBe("NX°");
    expect(siteConfig.pwa.icons.length).toBeGreaterThanOrEqual(2);
    expect(siteConfig.pwa.themeColor).toBe("#FFD849");
  });

  it("has navigation links with dropdowns and Sign In / Sign Up CTAs", () => {
    expect(siteConfig.navigation.links.length).toBeGreaterThan(0);
    const platform = siteConfig.navigation.links.find((l) => l.label === "Platform");
    expect(platform).toBeDefined();
    expect(platform?.dropdown?.length).toBeGreaterThan(0);

    expect(siteConfig.navigation.primaryCta.label).toBe("Sign Up");
    expect(siteConfig.navigation.secondaryCta?.label).toBe("Sign In");
    expect(siteConfig.navigation.remoteControlBadge?.enabled).toBe(true);
  });

  it("has hero configuration with particle field and CTAs", () => {
    expect(siteConfig.hero.headline).toContain("unified platform");
    expect(siteConfig.hero.primaryCta.label).toBe("Sign Up Free");
    expect(siteConfig.hero.particleField.colors.length).toBeGreaterThan(0);
  });

  it("has statement section with floating icons", () => {
    expect(siteConfig.statement.headline).toContain("NX° is not just a collection of apps");
    expect(siteConfig.statement.floatingIcons.length).toBeGreaterThan(0);
    siteConfig.statement.floatingIcons.forEach((icon) => {
      expect(icon.symbol).toBeDefined();
      expect(icon.x).toBeGreaterThanOrEqual(0);
      expect(icon.y).toBeGreaterThanOrEqual(0);
    });
  });

  it("has feature explorer items with cartridges and monorepo snippets", () => {
    expect(siteConfig.features.items.length).toBe(4);
    const monorepo = siteConfig.features.items.find((f) => f.id === "nx-monorepo");
    expect(monorepo?.codeSnippet?.code).toContain("apps/www");

    const cartridges = siteConfig.features.items.find((f) => f.id === "nx-cartridges");
    expect(cartridges?.codeSnippet?.code).toContain("createCartridge");
  });

  it("has use cases with role descriptions", () => {
    expect(siteConfig.useCases.items.length).toBeGreaterThan(0);
    siteConfig.useCases.items.forEach((uc) => {
      expect(uc.role).toBeDefined();
      expect(uc.tagline).toBeDefined();
      expect(uc.description).toBeDefined();
    });
  });

  it("has solutions with developer and enterprise tiers", () => {
    expect(siteConfig.solutions.cards.length).toBe(2);
    const devCard = siteConfig.solutions.cards.find((c) => c.id === "developers");
    expect(devCard?.highlighted).toBe(true);
  });

  it("has blog posts with dates and categories", () => {
    expect(siteConfig.blogs.posts.length).toBeGreaterThan(0);
    siteConfig.blogs.posts.forEach((post) => {
      expect(post.title).toBeDefined();
      expect(post.date).toBeDefined();
      expect(post.category).toBeDefined();
    });
  });

  it("has auth CTA configuration with CLI quick bootstrap", () => {
    expect(siteConfig.authCta.primaryCta.label).toContain("Sign Up");
    expect(siteConfig.authCta.secondaryCta.label).toContain("Sign In");
    expect(siteConfig.authCta.cliQuickInstall.command).toContain("npx");
    expect(siteConfig.authCta.trustBadge).toContain("Goldlabel");
  });

  it("has comprehensive footer links and copyright with company info", () => {
    expect(siteConfig.footer.columns.length).toBe(4);
    expect(siteConfig.footer.bottomLinks.length).toBeGreaterThan(0);
    expect(siteConfig.footer.copyright).toContain("Goldlabel");
  });
});
