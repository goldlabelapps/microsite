import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  metadata: {
    title: "NX°",
    description: "Rapidly build, compose, and operate modern web applications from one shared monorepo codebase. Powered by Next.js, React, Cartridges, and Uberedux.",
    siteUrl: "https://microsite.goldlabel.pro",
    twitterHandle: "@goldlabelapps",
    themeColor: "#364450",
  },

  brand: {
    name: "NX°",
    tagline: "Rapidly build, compose, and operate modern web apps from one shared monorepo.",
    logoType: "svg",
    contextMenu: {
      enabled: true,
      copySvgLabel: "Copy NX° Logo as SVG",
      guidelinesLabel: "Goldlabel Brand Guidelines",
      guidelinesUrl: "/brand",
    },
  },

  navigation: {
    remoteControlBadge: {
      enabled: true,
      label: "Launch NX° Studio",
      href: "/studio",
      tooltip: "Access your unified monorepo console and operational cartridges",
    },
    links: [
      {
        label: "Platform",
        dropdown: [
          {
            title: "Monorepo Core",
            description: "Modular fullstack application platform for Next.js & Node",
            href: "#features",
            icon: "Layers",
            badge: "v3.0",
          },
          {
            title: "Pluggable Cartridges",
            description: "Admin dashboards, CRUD tables, actions, and PWA tooling",
            href: "#features",
            icon: "Cpu",
            badge: "Modular",
          },
          {
            title: "Uberedux State Engine",
            description: "Deterministic global state and cross-app cache synchronization",
            href: "#features",
            icon: "Sparkles",
          },
          {
            title: "Goldlabel Design System",
            description: "Tokenized UI primitives with dark slate and gold aesthetics",
            href: "#features",
            icon: "Layout",
          },
        ],
      },
      {
        label: "Workflows",
        dropdown: [
          {
            title: "Product Engineers",
            description: "SSR and SSG runtime for high-performance public web apps",
            href: "#use-cases",
            icon: "Code2",
          },
          {
            title: "Founders & Operators",
            description: "Internal founder dashboards, curation queues, and CMS operations",
            href: "#use-cases",
            icon: "Building2",
          },
          {
            title: "Enterprise Teams",
            description: "Shared governance and zero duplicate boilerplate",
            href: "#use-cases",
            icon: "Globe",
          },
        ],
      },
      { label: "Solutions", href: "#solutions" },
      { label: "Articles", href: "#blogs" },
      { label: "Docs", href: "/docs", external: true },
    ],
    primaryCta: {
      label: "Sign Up",
      href: "/signup",
      icon: "ArrowRight",
    },
    secondaryCta: {
      label: "Sign In",
      href: "/signin",
    },
  },

  hero: {
    headline: "Build and operate multiple web apps from one unified platform",
    subheadline: "NX° is the modern JavaScript/TypeScript framework combining public Next.js experiences, modular operational cartridges, Uberedux state, and shared design systems—so you can launch faster without rebuilding infrastructure.",
    gradientWords: ["unified", "platform", "faster"],
    primaryCta: {
      label: "Sign Up Free",
      href: "/signup",
      icon: "ArrowRight",
    },
    secondaryCta: {
      label: "Sign In to Console",
      href: "/signin",
      icon: "ExternalLink",
    },
    video: {
      enabled: false,
    },
    particleField: {
      enabled: true,
      count: 65,
      interactive: true,
      colors: ["#FFD849", "#364450", "#e5c03e", "#4a5d6e", "#f5d144"],
      maxSpeed: 0.45,
      connectionDistance: 130,
    },
  },

  statement: {
    badge: "Architecture & Philosophy",
    headline: "NX° is not just a collection of apps — it is a platform for composing products, workflows, and shared capabilities efficiently.",
    subtext: "With NX°, teams launch public customer-facing web apps alongside internal operational dashboards from a single monorepo without sacrificing design coherence, development velocity, or operational control.",
    floatingIcons: [
      { name: "nx", symbol: "NX°", color: "#FFD849", x: 12, y: 15, size: 22, delay: 0 },
      { name: "code", symbol: "{ }", color: "#364450", x: 88, y: 20, size: 24, delay: 1.2 },
      { name: "cartridge", symbol: "📦", color: "#FFD849", x: 10, y: 72, size: 26, delay: 2.1 },
      { name: "lightning", symbol: "⚡", color: "#e5c03e", x: 90, y: 68, size: 28, delay: 0.8 },
      { name: "terminal", symbol: ">_", color: "#364450", x: 50, y: 10, size: 20, delay: 1.5 },
      { name: "shield", symbol: "🛡️", color: "#FFD849", x: 50, y: 88, size: 22, delay: 2.7 },
    ],
  },

  features: {
    sectionTitle: "The NX° Product Foundation",
    subtitle: "A cohesive toolchain engineered for scalable fullstack delivery across apps and operational surfaces.",
    items: [
      {
        id: "nx-monorepo",
        tag: "Monorepo Core",
        title: "Apps & Packages Architecture",
        description: "Organized into clear surfaces: apps/www for high-speed public web experiences and apps/cms for internal team workflows, powered by shared packages in packages/design-system and packages/uberedux.",
        badge: "Core",
        previewType: "code",
        codeSnippet: {
          language: "json",
          filename: "nx-monorepo.config.json",
          code: `{
  "name": "goldlabel-nx-workspace",
  "version": "3.0.0",
  "workspaces": [
    "apps/www",         // Public web app (Next.js 16 + React 19)
    "apps/cms",         // Founder & operational dashboard
    "packages/design-system", // Shared UI tokens & components
    "packages/uberedux",      // Shared state & cache engine
    "packages/cartridges"     // Pluggable feature modules
  ],
  "engine": {
    "node": ">=20.0.0",
    "pnpm": ">=10.0.0"
  }
}`,
        },
        cta: {
          label: "Explore Architecture Guide",
          href: "/docs/engineering/apps-packages",
        },
      },
      {
        id: "nx-cartridges",
        tag: "Modular Extensions",
        title: "Pluggable Cartridges",
        description: "Extend your operational dashboard with drop-in cartridges. Includes nx-admin, automated CRUD interfaces, custom actions, hook pipelines, notification dispatchers, and offline PWA support.",
        badge: "Modular",
        previewType: "code",
        codeSnippet: {
          language: "typescript",
          filename: "cartridges/nx-admin.ts",
          code: `import { createCartridge } from "@goldlabelapps/cartridges";
import { uberedux } from "@goldlabelapps/uberedux";

export const adminCartridge = createCartridge({
  id: "nx-admin",
  title: "Operations & Content Manager",
  routes: ["/admin/curation", "/admin/products", "/admin/users"],
  actions: {
    syncCatalog: async (ctx) => {
      const items = await ctx.fetchQueue();
      uberedux.dispatch({ type: "CATALOG_SYNCED", payload: items });
    },
  },
  pwa: { enabled: true, cacheStrategy: "networkFirst" },
});`,
        },
        cta: {
          label: "View Cartridges Doc",
          href: "/docs/apps/admin/cartridges",
        },
      },
      {
        id: "nx-uberedux",
        tag: "State & Cache",
        title: "Uberedux State Engine",
        description: "A lightweight, deterministic global state management system built for high-trust application runtimes with seamless session hydration and cross-tab event synchronization.",
        badge: "Fast",
        previewType: "terminal",
        terminalSnippet: {
          prompt: "nx-console",
          commands: [
            { cmd: "nx status --workspace=apps/www" },
            { output: "✔ apps/www: Next.js runtime healthy (Static + SSR)" },
            { cmd: "nx state:inspect uberedux --live" },
            { output: "✦ Uberedux active: 12 slices synchronized across tabs" },
          ],
        },
        cta: {
          label: "Read State Patterns",
          href: "/docs/apps/admin/framework/uberedux",
        },
      },
      {
        id: "nx-design-system",
        tag: "UI Primitives",
        title: "Goldlabel Design System",
        description: "Tokenized visual and interaction system featuring custom light and dark themes, slate backgrounds, golden amber accents, and accessible keyboard micro-interactions.",
        badge: "Themed",
        previewType: "interactive-ui",
        cta: {
          label: "Explore Design System",
          href: "/docs/apps/admin/framework/design-system",
        },
      },
    ],
  },

  useCases: {
    title: "Tailored for the Modern Development Team",
    subtitle: "NX° gives everyone the right tools—from customer-facing fullstack engineering to founder operational management.",
    items: [
      {
        id: "product-engineers",
        role: "Product Engineers",
        tagline: "Ship Next.js apps with extreme speed & zero boilerplate",
        description: "Build SEO-optimized, ultra-fast web experiences with server-side rendering, static site generation, and instant hot-module reloading.",
        keyFeatures: [
          "Next.js 16 + React 19 + TypeScript foundation",
          "Zero-config deployment to Vercel, Cloudflare, or AWS",
          "Pre-configured Vitest and Playwright test suites",
        ],
        cta: {
          label: "Explore Developer Guide",
          href: "/docs",
        },
      },
      {
        id: "founders-operators",
        role: "Founders & Operators",
        tagline: "Manage operations, queues & content from a unified CMS",
        description: "Operate your product without context switching. Manage curation pipelines, affiliate products, notifications, and user roles from one founder dashboard.",
        keyFeatures: [
          "Automated CRUD and queue management",
          "Role-based access control and Supabase session auth",
          "PWA offline support for mobile operations",
        ],
        cta: {
          label: "View Executive Overview",
          href: "/docs/business/executive-overview",
        },
      },
      {
        id: "enterprise-teams",
        role: "Platform Architects",
        tagline: "Scale multiple digital products without code fragmentation",
        description: "Keep internal tools and public-facing products strictly aligned. Share design tokens, utilities, and state engines across dozens of modular apps.",
        keyFeatures: [
          "Monorepo governance with isolated workspaces",
          "Shared design system and component libraries",
          "Comprehensive documentation and delivery guardrails",
        ],
        cta: {
          label: "Read Investor Overview",
          href: "/docs/business/investor-overview",
        },
      },
    ],
  },

  solutions: {
    title: "Flexible Options for Every Stage",
    subtitle: "Get started for free or scale your organization with enterprise governance.",
    cards: [
      {
        id: "developers",
        badge: "Open Platform",
        tier: "For Developers",
        heading: "Launch Your Next Project",
        description: "Everything you need to build, test, and ship modern monorepo applications.",
        features: [
          "Complete NX° monorepo architecture",
          "Next.js 16 & React 19 app templates",
          "Goldlabel Design System UI library",
          "Uberedux state management engine",
          "Comprehensive Vitest & Playwright testing matrix",
        ],
        cta: {
          label: "Sign Up",
          href: "/signup",
          variant: "primary",
        },
        highlighted: true,
      },
      {
        id: "organizations",
        badge: "Enterprise",
        tier: "For Organizations",
        heading: "Scale Multiple Products",
        description: "Advanced governance, custom cartridges, dedicated infrastructure, and SLA support.",
        features: [
          "Everything in Developer tier",
          "Multi-team workspace governance & access control",
          "Custom cartridge architecture & integration",
          "Dedicated cloud hosting & hybrid deployment",
          "Priority architectural review & 24/7 SLA",
        ],
        cta: {
          label: "Contact Team",
          href: "mailto:goldlabel.apps@gmail.com",
          variant: "secondary",
        },
        highlighted: false,
      },
    ],
  },

  blogs: {
    title: "Platform News & Architecture",
    subtitle: "Insights, technical updates, and architectural guides from Goldlabel.",
    viewAllCta: {
      label: "View All Articles",
      href: "/docs",
    },
    posts: [
      {
        id: "executive-overview",
        title: "NX° Executive Overview: Composing Ambitious Products Efficiently",
        date: "Aug 2026",
        category: "Architecture",
        summary: "Why NX° is more than a collection of apps: a platform combining public experiences, internal operations, and shared UI infrastructure.",
        href: "/docs/business/executive-overview",
      },
      {
        id: "investor-overview",
        title: "Lowering Startup Execution Risk with Platform Foundations",
        date: "Aug 2026",
        category: "Enterprise",
        summary: "How dual-app monorepos, reusable cartridges, and centralized delivery discipline create compounding technical leverage.",
        href: "/docs/business/investor-overview",
      },
      {
        id: "cartridges-intro",
        title: "Introducing Modular Cartridges: Extending Founder & CMS Workflows",
        date: "Jul 2026",
        category: "Product",
        summary: "A deep dive into building pluggable admin tools, CRUD views, and offline PWA workflows with zero boilerplate.",
        href: "/docs/apps/admin/cartridges",
      },
    ],
  },

  authCta: {
    badge: "✦ Get Started Today",
    title: "Ready to Build and Scale with NX°?",
    subtitle: "Join product teams, founders, and developers shipping ambitious web applications from one unified monorepo.",
    primaryCta: {
      label: "Sign Up for NX° Free",
      href: "/signup",
    },
    secondaryCta: {
      label: "Sign In to Console",
      href: "/signin",
    },
    cliQuickInstall: {
      label: "Or bootstrap locally via CLI:",
      command: "npx @goldlabelapps/cli setup",
    },
    trustBadge: "Goldlabel • Monorepo Architecture • Zero Lock-in • Enterprise-Ready",
  },

  footer: {
    tagline: "Rapidly build, compose, and operate modern web apps.",
    brandName: "NX°",
    address: "Goldlabel, 321-323 High Road, Chadwell Heath, Essex RM6 6AX, UK",
    companyNumber: "UK Limited Company 5460545",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "NX° Monorepo Core", href: "#features" },
          { label: "Pluggable Cartridges", href: "#features" },
          { label: "Uberedux State", href: "#features" },
          { label: "Design System", href: "#features" },
          { label: "Sign Up", href: "/signup" },
        ],
      },
      {
        title: "Workflows",
        links: [
          { label: "Product Engineers", href: "#use-cases" },
          { label: "Founders & Operators", href: "#use-cases" },
          { label: "Enterprise Teams", href: "#use-cases" },
          { label: "Pricing & Plans", href: "#solutions" },
          { label: "Sign In", href: "/signin" },
        ],
      },
      {
        title: "Documentation",
        links: [
          { label: "Executive Overview", href: "/docs/business/executive-overview", external: true },
          { label: "Developer Guide", href: "/docs", external: true },
          { label: "Investor Overview", href: "/docs/business/investor-overview", external: true },
          { label: "Cartridges Doc", href: "/docs/apps/admin/cartridges", external: true },
        ],
      },
      {
        title: "Goldlabel",
        links: [
          { label: "GitHub", href: "https://github.com/goldlabelapps", external: true },
          { label: "YouTube Channel", href: "https://www.youtube.com/@goldlabelApps", external: true },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chris-dorward", external: true },
          { label: "Twitter / X", href: "https://x.com/goldlabelapps", external: true },
          { label: "Contact Email", href: "mailto:goldlabel.apps@gmail.com", external: true },
        ],
      },
    ],
    bottomLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Brand Guidelines", href: "/brand" },
      { label: "Security & Trust", href: "/security" },
    ],
    socialLinks: [
      { platform: "GitHub", href: "https://github.com/goldlabelapps" },
      { platform: "YouTube", href: "https://www.youtube.com/@goldlabelApps" },
      { platform: "Twitter", href: "https://x.com/goldlabelapps" },
    ],
    copyright: "© 2026 Goldlabel Apps Ltd. All rights reserved.",
  },
};
