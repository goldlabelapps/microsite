# 🚀 NX° — The Modern Product Platform Microsite

A pixel-perfect, hyper-polished landing page for the **NX° Product Platform** by [Goldlabel](https://goldlabel.pro), engineered as a **100% config-driven microsite template** with a **battle-tested testing & CI suite** and an **interactive, cross-platform CLI toolchain** ([`@goldlabelapps/cli`](https://www.npmjs.com/package/@goldlabelapps/cli)).

Create a world-class landing page for your SaaS, developer tool, open-source project, or startup in under 2 minutes simply by editing a single configuration file.

---

## ⚡ 60-Second Quickstart

```bash
# 1. Clone the repository
git clone https://github.com/goldlabelapps/microsite.git my-product-site
cd my-product-site

# 2. Run the interactive setup wizard (or ./bin/setup.sh on Unix, bin\setup.cmd on Windows)
pnpm run setup

# 3. Launch local dev server (default port: 2026)
pnpm run dev
```

Open [http://localhost:2026](http://localhost:2026) to see your microsite live with instant Hot Module Reloading (HMR).

---

## 💻 Modular CLI Toolchain (`@goldlabelapps/cli`)

This template includes a zero-dependency, cross-platform interactive CLI script designed for both terminal menus and classic Unix-style command automation.

```
  ╔═══════════════════════════════════════════════════════════════╗
  ║   ✦ GOLDLABEL  //  MICROSITE CLI v0.1.1                      ║
  ║   The Autonomous Landing Page & Microsite Toolchain           ║
  ╚═══════════════════════════════════════════════════════════════╝
```

### Launching the Interactive Terminal Menu
```bash
pnpm run cli
```

### Available CLI Commands

| Command | Description |
| :--- | :--- |
| `pnpm run setup` | Guided project onboarding, dependency install, pnpm build permissions & environment doctor |
| `pnpm run cli dev` | Start Next.js development server on port 2026 |
| `pnpm run cli test [type]` | Test runner (`unit`, `watch`, `coverage`, `e2e`, `ui`, `ci`) |
| `pnpm run cli scaffold` | Interactive code generator (Bento cards, developer use case stories, blog posts) |
| `pnpm run cli git` | Git branch status and interactive Conventional Commits helper |
| `pnpm run cli env` | Toolchain diagnostics (Node version, package managers, Git, Playwright) |
| `pnpm run cli build` | Compiles optimized static production bundle |
| `pnpm run cli --help` | Displays classic Unix manual synopsis |

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
- **🧪 Enterprise-Grade Testing & CI**: Comprehensive unit, component, and E2E coverage (>90% coverage with Vitest + Testing Library + Playwright + GitHub Actions CI workflow).
- **🚀 Universal Deployment**: Next.js 16 + React 19 + Tailwind CSS + Framer Motion. Zero-config deployment to Vercel, Cloudflare Pages, GitHub Pages, Firebase Hosting, or Netlify.

---

## 🧪 Testing Suite & Quality Gate

```
                  ┌──────────────────────────────────────────────┐
                  │          CI / PR Quality Gate                │
                  └──────────────────────┬───────────────────────┘
                                         │
     ┌───────────────────┬───────────────┴───────────────┬───────────────────┐
     ▼                   ▼                               ▼                   ▼
┌──────────────┐ ┌──────────────┐            ┌───────────────────────┐ ┌──────────────┐
│  TypeScript  │ │    ESLint    │            │     Unit/Component    │ │   Playwright  │
│  Typecheck   │ │   Linting    │            │     Vitest + V8       │ │    E2E Suite  │
│(tsc --noEmit)│ │(Next.js rules│            │ (>90% Code Coverage)  │ │(Multi-Browser)│
└──────────────┘ └──────────────┘            └───────────────────────┘ └──────────────┘
```

### Test Commands

| Command | Description |
| :--- | :--- |
| `pnpm run typecheck` | Validates strict TypeScript compilation without emitting files |
| `pnpm run lint` | Runs ESLint with Next.js Core Web Vitals and React rules |
| `pnpm test` | Runs the Vitest unit & component test suite (21 test suites, 71 tests) |
| `pnpm run test:watch` | Starts Vitest in interactive watch mode |
| `pnpm run test:coverage` | Generates full V8 test coverage report with thresholds |
| `pnpm run test:e2e` | Executes Playwright end-to-end browser test specifications |
| `pnpm run test:e2e:ui` | Opens the interactive Playwright Test Runner UI |
| `pnpm run ci` | Runs the full pre-commit / pre-merge verification pipeline locally |

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
   pnpm run build
   ```
3. Deploy the generated `out/` directory to GitHub Pages, Cloudflare Pages, AWS S3, or Firebase Hosting.

---

## 📂 Project Structure

```
microsite/
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI Quality Gate
├── bin/
│   ├── cli.js                 # Executable CLI script (#!/usr/bin/env node)
│   ├── setup.sh               # Unix POSIX setup helper
│   └── setup.cmd              # Windows setup helper
├── cli/                       # Modular @goldlabelapps/cli core
│   ├── index.js               # CLI router & interactive loop
│   ├── terminal.js            # ANSI styling, ASCII banners, prompt builders
│   ├── env.js                 # Runtime & toolchain diagnostics
│   ├── cli.test.js            # CLI automated unit test suite
│   └── commands/
│       ├── setup.js           # Guided project setup & doctor
│       ├── dev.js             # Dev server launcher
│       ├── test.js            # Multi-suite test runner
│       ├── scaffold.js        # Interactive code & config generator
│       ├── git.js             # Git workflow & Conventional Commits
│       └── help.js            # Unix man-style manual page
├── e2e/                       # Playwright End-to-End Test Specs
│   ├── landing-page.spec.ts
│   ├── navigation.spec.ts
│   ├── hero-and-video.spec.ts
│   ├── feature-explorer.spec.ts
│   ├── use-cases-and-solutions.spec.ts
│   └── download-flow.spec.ts
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with fonts, SEO & metadata
│   │   ├── page.tsx           # Assembles all microsite sections
│   │   ├── page.test.tsx      # Page hierarchy & section render test
│   │   └── globals.css        # Tailwind styles & dark theme
│   ├── config/
│   │   ├── site.config.ts     # PRIMARY CONFIG: 100% configurable content
│   │   ├── site.config.test.ts# Schema verification tests
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
│       ├── utils.ts                 # Class merger & OS detector
│       └── utils.test.ts            # Utils unit tests
├── vitest.config.ts           # Vitest configuration & coverage thresholds
├── vitest.setup.ts            # DOM & canvas polyfills
├── playwright.config.ts       # Playwright E2E browser test configuration
├── package.json
└── README.md
```

---

## 📄 License
MIT © 2026. Free to use for personal and commercial projects.
