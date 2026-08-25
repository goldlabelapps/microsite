# 🚀 Microsite — Google Antigravity Landing Page Template

A pixel-perfect, hyper-polished clone of the [Google Antigravity](https://antigravity.google) product landing page, engineered as a **100% config-driven microsite template**.

Create a world-class landing page for your SaaS, developer tool, open-source project, or startup in under 2 minutes simply by editing a single configuration file.

---

## ✨ Features & Display Paradigms

- **🎯 100% Config-Driven**: All text, branding, navigation, videos, feature bento cards, code snippets, blog posts, pricing tiers, and download links are driven by [`src/config/site.config.ts`](src/config/site.config.ts). No React or CSS editing needed.
- **✨ Particle Constellation Canvas**: GPU-accelerated interactive HTML5 canvas background with ambient particle glow and mouse interaction.
- **💎 Glassmorphic Sticky Header**: Reactive blur and opacity changes on scroll, dropdown menus with animations, and right-click context menu ("Copy Logo as SVG", "Press Guidelines").
- **🎥 Video Showcase & Lightbox**: Interactive product showcase with custom floating magnetic cursor ("Play intro" / "Watch case") and responsive modal player.
- **⚡ Bento Feature Explorer**: Interactive tabbed product explorer supporting interactive terminal previews, live code snippet viewer with copy-to-clipboard, and simulated agent fleet UI.
- **🧭 Developer Stories & Use Cases Carousel**: Horizontal slider showcasing role-specific workflows (Fullstack, Enterprise, Frontend) with video triggers.
- **💻 OS Auto-Detection Download Banner**: Automatically detects the user's operating system (Apple Silicon, Intel Mac, Windows x64, Linux) with celebratory liftoff particle confetti.
- **📱 Ultra-Responsive**: Hand-crafted layouts for desktop, tablet, and mobile with accordion navigation drawers.
- **🚀 Universal Deployment**: Next.js 16 + React 19 + Tailwind CSS + Framer Motion. Zero-config deployment to Vercel, Cloudflare Pages, GitHub Pages, Firebase Hosting, or Netlify.

---

## ⚡ 60-Second Quickstart

### 1. Clone the repository
```bash
git clone https://github.com/goldlabelapps/microsite.git my-product-site
cd my-product-site
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see your microsite live with instant Hot Module Reloading (HMR).

---

## 🛠️ How to Customize Your Microsite

Open [`src/config/site.config.ts`](src/config/site.config.ts). Every single component on the landing page reads directly from this strongly-typed configuration object:

```typescript
export const siteConfig: SiteConfig = {
  // 1. SEO & Browser Metadata
  metadata: {
    title: "My Product — Next-Gen Developer Tool",
    description: "Ship faster with autonomous intelligence.",
    siteUrl: "https://myproduct.dev",
    twitterHandle: "@myproduct",
    themeColor: "#0a0b0e",
  },

  // 2. Brand & Logo
  brand: {
    name: "MyProduct",
    tagline: "Experience liftoff",
    logoType: "svg", // "svg" | "text"
    contextMenu: {
      enabled: true,
      copySvgLabel: "Copy Logo as SVG",
      guidelinesLabel: "Brand Guidelines",
      guidelinesUrl: "/press",
    },
  },

  // 3. Navigation & Dropdowns
  navigation: {
    remoteControlBadge: {
      enabled: true,
      label: "🚀 Launch Remote Web App",
      href: "https://app.myproduct.dev",
    },
    links: [
      {
        label: "Products",
        dropdown: [
          {
            title: "Core Platform",
            description: "High performance agent orchestrator",
            href: "#features",
            icon: "Layers",
            badge: "New",
          },
          {
            title: "CLI Tool",
            description: "Terminal-first command line interface",
            href: "#features",
            icon: "Terminal",
          },
        ],
      },
      { label: "Pricing", href: "#solutions" },
      { label: "Blog", href: "#blogs" },
    ],
    primaryCta: {
      label: "Download",
      href: "#download",
    },
  },

  // 4. Hero Section
  hero: {
    headline: "Experience liftoff with next-gen intelligence",
    subheadline: "Built for developers for the modern era. Delegate complex multi-step coding with complete transparency.",
    primaryCta: { label: "Get Started Free", href: "#download", icon: "Download" },
    secondaryCta: { label: "Explore Use Cases", href: "#use-cases", icon: "ArrowRight" },
    video: {
      enabled: true,
      title: "Product Walkthrough",
      youtubeEmbedUrl: "https://www.youtube.com/embed/SVCBA-pBgt0?autoplay=1",
      hoverText: "Play intro",
    },
    particleField: {
      enabled: true,
      count: 65,
      colors: ["#3186FF", "#FBBC04", "#FC413D", "#00B95C", "#749BFF"],
    },
  },

  // 5. Central Vision Statement & Floating Badges
  statement: {
    badge: "Next-Gen Architecture",
    headline: "The modern software development platform built for the autonomous era.",
    floatingIcons: [
      { name: "spark", symbol: "✦", color: "#FBBC04", x: 12, y: 15 },
      { name: "terminal", symbol: ">_", color: "#3186FF", x: 88, y: 22 },
      { name: "code", symbol: "{ }", color: "#00B95C", x: 8, y: 72 },
      { name: "deployed", symbol: "⚡", color: "#FC413D", x: 92, y: 68 },
    ],
  },

  // 6. Bento Grid Products & Features
  features: {
    sectionTitle: "Product Toolchain",
    subtitle: "A unified suite engineered for the modern workflow.",
    items: [
      {
        id: "core-cli",
        tag: "Terminal-First",
        title: "Product CLI",
        description: "Run tasks, execute scripts, and inspect logs directly from your keyboard.",
        badge: "Fast",
        previewType: "terminal",
        terminalSnippet: {
          commands: [
            { cmd: "mytool run 'Deploy microservices to staging' --bg" },
            { output: "✔ Staging cluster ready in 1.4s" },
          ],
        },
      },
    ],
  },

  // 7. Solutions & Pricing Tiers
  solutions: {
    title: "Available for every developer and team",
    subtitle: "Get started for free or scale across your entire organization.",
    cards: [
      {
        id: "free",
        badge: "Free Forever",
        tier: "For Developers",
        heading: "Achieve new heights",
        description: "Everything you need to build and test locally.",
        features: ["Local Workspaces", "Fast CLI", "Unlimited Projects"],
        cta: { label: "Download Now", href: "#download", variant: "primary" },
        highlighted: true,
      },
    ],
  },

  // 8. Download Platforms
  downloadSection: {
    title: "Download for your platform",
    subtitle: "Available on macOS, Windows, and Linux.",
    platforms: [
      { os: "macos-silicon", name: "Apple Silicon", icon: "apple", downloadUrl: "#", version: "v2.4.0" },
      { os: "macos-intel", name: "Intel Mac", icon: "apple", downloadUrl: "#", version: "v2.4.0" },
      { os: "windows", name: "Windows (x64)", icon: "windows", downloadUrl: "#", version: "v2.4.0" },
      { os: "linux", name: "Linux (.deb/.rpm)", icon: "linux", downloadUrl: "#", version: "v2.4.0" },
    ],
    cliQuickInstall: {
      label: "Or install via shell:",
      command: "curl -fsSL https://myproduct.dev/install.sh | bash",
    },
  },

  // 9. Footer
  footer: {
    tagline: "Experience liftoff with next-gen intelligence.",
    brandName: "MyProduct",
    columns: [...],
    bottomLinks: [...],
    copyright: "© 2026 MyProduct LLC. All rights reserved.",
  },
};
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
Push your repository to GitHub, connect to Vercel, and click **Deploy**.

### Static Export (GitHub Pages / Cloudflare Pages / Firebase)
To generate pure static HTML/CSS/JS files:
1. Add `output: 'export'` to `next.config.ts`:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: "export",
     images: { unoptimized: true },
   };

   export default nextConfig;
   ```
2. Build static bundle:
   ```bash
   npm run build
   ```
3. Deploy the generated `out/` directory to GitHub Pages, Cloudflare Pages, AWS S3, or Firebase Hosting.

---

## 📂 Project Structure

```
microsite/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with fonts, SEO & metadata
│   │   ├── page.tsx           # Assembles all microsite sections
│   │   └── globals.css        # Tailwind styles & dark theme
│   ├── config/
│   │   ├── site.config.ts     # PRIMARY CONFIG: 100% configurable content
│   │   └── types.ts           # Strongly-typed config schema
│   ├── components/
│   │   ├── navigation/
│   │   │   ├── Header.tsx     # Sticky glass navbar with dropdowns & CTAs
│   │   │   ├── DropdownMenu.tsx
│   │   │   ├── LogoContextMenu.tsx # Right-click context menu ("Copy SVG")
│   │   │   └── MobileMenu.tsx # Responsive mobile navigation drawer
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ParticleCanvas.tsx # Ambient morphing particle mesh
│   │   │   └── VideoModal.tsx     # YouTube / Lightbox video player
│   │   ├── showcase/
│   │   │   ├── StatementSection.tsx # Floating icon cloud + statement
│   │   │   ├── FeatureExplorer.tsx  # Interactive Bento grid / tabbed switcher
│   │   │   ├── UseCaseSlider.tsx    # Carousel with custom magnetic cursor
│   │   │   ├── SolutionsSection.tsx # Free vs Enterprise tier cards
│   │   │   └── BlogSection.tsx      # News & releases slider/grid
│   │   ├── download/
│   │   │   └── DownloadBanner.tsx   # Grand CTA banner with OS auto-detection
│   │   ├── footer/
│   │   │   └── Footer.tsx           # Multi-column Google-style footer
│   │   └── ui/
│   │       ├── Button.tsx           # Pill buttons (primary, secondary, glass)
│   │       ├── CustomCursor.tsx     # Interactive magnetic cursor wrapper
│   │       └── Card.tsx             # Dark glass card with border glow
│   └── lib/
│       └── utils.ts                 # Class merger & OS detector
├── package.json
└── README.md
```

---

## 📄 License
MIT © 2026. Free to use for personal and commercial projects.
