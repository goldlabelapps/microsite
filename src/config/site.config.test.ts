import { describe, it, expect } from "vitest";
import { siteConfig } from "./site.config";

describe("siteConfig", () => {
  it("has valid metadata", () => {
    expect(siteConfig.metadata.title).toBeDefined();
    expect(siteConfig.metadata.description).toBeDefined();
    expect(siteConfig.metadata.siteUrl).toMatch(/^https?:\/\//);
  });

  it("has valid brand configuration and logo menu", () => {
    expect(typeof siteConfig.brand.name).toBe("string");
    expect(siteConfig.brand.name.length).toBeGreaterThan(0);
    expect(siteConfig.brand.contextMenu.enabled).toBe(true);
    expect(siteConfig.brand.contextMenu.copySvgLabel).toBe("Copy Logo as SVG");
  });

  it("has navigation links with dropdowns and remote control", () => {
    expect(siteConfig.navigation.links.length).toBeGreaterThan(0);
    const products = siteConfig.navigation.links.find((l) => l.label === "Products");
    expect(products).toBeDefined();
    expect(products?.dropdown?.length).toBeGreaterThan(0);

    expect(siteConfig.navigation.primaryCta.label).toBe("Download");
    expect(siteConfig.navigation.remoteControlBadge?.enabled).toBe(true);
  });

  it("has hero configuration with particle field and video", () => {
    expect(siteConfig.hero.headline).toContain("liftoff");
    expect(siteConfig.hero.video.enabled).toBe(true);
    expect(siteConfig.hero.video.youtubeEmbedUrl).toContain("youtube.com");
    expect(siteConfig.hero.particleField.colors.length).toBeGreaterThan(0);
  });

  it("has statement section with floating icons", () => {
    expect(siteConfig.statement.headline).toContain("Google Antigravity is our agentic development platform");
    expect(siteConfig.statement.floatingIcons.length).toBeGreaterThan(0);
    siteConfig.statement.floatingIcons.forEach((icon) => {
      expect(icon.symbol).toBeDefined();
      expect(icon.x).toBeGreaterThanOrEqual(0);
      expect(icon.y).toBeGreaterThanOrEqual(0);
    });
  });

  it("has feature explorer items with snippets and mockups", () => {
    expect(siteConfig.features.items.length).toBe(4);
    const cli = siteConfig.features.items.find((f) => f.id === "antigravity-cli");
    expect(cli?.terminalSnippet?.commands.length).toBeGreaterThan(0);

    const sdk = siteConfig.features.items.find((f) => f.id === "antigravity-sdk");
    expect(sdk?.codeSnippet?.code).toContain("from antigravity import");
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

  it("has download platforms for all major operating systems", () => {
    expect(siteConfig.downloadSection.platforms.length).toBe(4);
    const osList = siteConfig.downloadSection.platforms.map((p) => p.os);
    expect(osList).toContain("macos-silicon");
    expect(osList).toContain("macos-intel");
    expect(osList).toContain("windows");
    expect(osList).toContain("linux");
    expect(siteConfig.downloadSection.cliQuickInstall.command).toContain("curl");
  });

  it("has comprehensive footer links and copyright", () => {
    expect(siteConfig.footer.columns.length).toBe(4);
    expect(siteConfig.footer.bottomLinks.length).toBeGreaterThan(0);
    expect(typeof siteConfig.footer.copyright).toBe("string");
    expect(siteConfig.footer.copyright.length).toBeGreaterThan(0);
  });
});
