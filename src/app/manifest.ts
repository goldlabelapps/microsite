import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.pwa.name,
    short_name: siteConfig.pwa.shortName,
    description: siteConfig.pwa.description,
    start_url: siteConfig.pwa.startUrl,
    scope: siteConfig.pwa.scope,
    display: siteConfig.pwa.display,
    orientation: siteConfig.pwa.orientation,
    theme_color: siteConfig.pwa.themeColor,
    background_color: siteConfig.pwa.backgroundColor,
    icons: siteConfig.pwa.icons.map((icon) => ({
      src: icon.src,
      sizes: icon.sizes,
      type: icon.type,
      purpose: (icon.purpose === "maskable" || icon.purpose === "any maskable"
        ? "maskable"
        : icon.purpose === "monochrome"
        ? "monochrome"
        : "any") as "any" | "maskable" | "monochrome" | undefined,
    })),
  };
}
