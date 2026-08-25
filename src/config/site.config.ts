import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  metadata: {
    title: "NX°",
    description: "Rapidly build modern apps in the agent-first era.",
    siteUrl: "https://microsite.goldlabel.pro",
    twitterHandle: "@goldlabelapps",
    themeColor: "#0a0b0e",
  },

  brand: {
    name: "NX°",
    tagline: "Rapidly build modern apps in the agent-first era.",
    logoType: "svg",
    contextMenu: {
      enabled: true,
      copySvgLabel: "Copy Logo as SVG",
      guidelinesLabel: "Press Guidelines",
      guidelinesUrl: "#press",
    },
  },

  navigation: {
    remoteControlBadge: {
      enabled: true,
      label: "Launch Remote Control",
      href: "https://antigravity.google/remote",
      tooltip: "Access your agent fleet anywhere from your mobile device or browser",
    },
    links: [
      {
        label: "Products",
        dropdown: [
          {
            title: "Antigravity 2.0",
            description: "Command center for parallel local agents and workspaces",
            href: "#features",
            icon: "Layers",
            badge: "New",
          },
          {
            title: "Antigravity CLI",
            description: "Terminal-first agentic interface for fast workflows",
            href: "#features",
            icon: "Terminal",
          },
          {
            title: "Antigravity IDE",
            description: "Deeply integrated VS Code & JetBrains extension",
            href: "#features",
            icon: "Code2",
          },
          {
            title: "Antigravity SDK",
            description: "Python & TypeScript harnesses to build custom agents",
            href: "#features",
            icon: "Cpu",
          },
        ],
      },
      {
        label: "Use Cases",
        dropdown: [
          {
            title: "Fullstack Engineering",
            description: "End-to-end features, migrations, and bug squashing",
            href: "#use-cases",
            icon: "Globe",
          },
          {
            title: "Frontend & UI",
            description: "Component design, responsive polish, and visual tests",
            href: "#use-cases",
            icon: "Layout",
          },
          {
            title: "Data Science & AI",
            description: "Exploratory analysis, pipeline tuning, and model evals",
            href: "#use-cases",
            icon: "Sparkles",
          },
          {
            title: "Enterprise Teams",
            description: "Scale agentic workflows with governance and security",
            href: "#use-cases",
            icon: "Building2",
          },
        ],
      },
      {
        label: "Pricing",
        href: "#solutions",
      },
      {
        label: "Enterprise",
        href: "#solutions",
      },
      {
        label: "Resources",
        dropdown: [
          {
            title: "Documentation",
            description: "Quickstarts, tutorials, and CLI/SDK references",
            href: "#",
            icon: "BookOpen",
            external: true,
          },
          {
            title: "Blog & Updates",
            description: "Latest news, feature releases, and deep dives",
            href: "#blogs",
            icon: "Newspaper",
          },
          {
            title: "Changelog",
            description: "Version history and release notes",
            href: "#",
            icon: "History",
          },
          {
            title: "Community & Support",
            description: "Discord, GitHub discussions, and developer support",
            href: "#",
            icon: "LifeBuoy",
          },
        ],
      },
    ],
    primaryCta: {
      label: "Download",
      href: "#download",
      icon: "Download",
    },
  },

  hero: {
    headline: "Experience liftoff with the next-gen agent platform",
    subheadline: "Built for developers in the agent-first era. Delegate complex multi-step coding, run parallel subagents, and orchestrate workspaces with complete transparency.",
    gradientWords: ["liftoff", "next-gen agent platform"],
    primaryCta: {
      label: "Download",
      href: "#download",
      icon: "Download",
    },
    secondaryCta: {
      label: "Explore use cases",
      href: "#use-cases",
      icon: "ArrowRight",
    },
    video: {
      enabled: true,
      badge: "Watch intro",
      title: "Google Antigravity Launch & Walkthrough",
      youtubeEmbedUrl: "https://www.youtube.com/embed/SVCBA-pBgt0?autoplay=1",
      hoverText: "Play intro",
    },
    particleField: {
      enabled: true,
      count: 65,
      interactive: true,
      colors: ["#3186FF", "#FBBC04", "#FC413D", "#00B95C", "#749BFF"],
      maxSpeed: 0.6,
      connectionDistance: 110,
    },
  },

  statement: {
    badge: "Agent-First Development",
    headline: "Google Antigravity is our agentic development platform, allowing anyone to build in the agent-first era.",
    subtext: "Designed from first principles to pair human intent with autonomous intelligence, transparent artifacts, and rigorous verification.",
    floatingIcons: [
      { name: "spark", symbol: "✦", color: "#FBBC04", x: 12, y: 15, size: 28, delay: 0 },
      { name: "terminal", symbol: ">_", color: "#3186FF", x: 88, y: 22, size: 30, delay: 0.5 },
      { name: "code", symbol: "{ }", color: "#00B95C", x: 8, y: 72, size: 32, delay: 1 },
      { name: "deployed", symbol: "⚡", color: "#FC413D", x: 92, y: 68, size: 26, delay: 1.5 },
      { name: "merge", symbol: "⑂", color: "#749BFF", x: 22, y: 88, size: 28, delay: 2 },
      { name: "check", symbol: "✓", color: "#00B95C", x: 78, y: 86, size: 28, delay: 2.5 },
      { name: "command", symbol: "⌘", color: "#3186FF", x: 82, y: 8, size: 26, delay: 3 },
      { name: "refresh", symbol: "↻", color: "#FBBC04", x: 18, y: 8, size: 24, delay: 3.5 },
    ],
  },

  features: {
    sectionTitle: "Explore Products",
    subtitle: "A unified suite engineered for the agentic development lifecycle.",
    items: [
      {
        id: "antigravity-2",
        tag: "Command Center",
        title: "Antigravity 2.0",
        description: "Your command center to manage multiple local agents in parallel. Group conversations into Projects, operate across multiple workspaces, and automate routine tasks with scheduled messages.",
        badge: "Flagship",
        cta: {
          label: "Explore Product",
          href: "#download",
        },
        previewType: "interactive-ui",
        uiMockup: {
          type: "agent-manager",
          accentColor: "#3186FF",
        },
      },
      {
        id: "antigravity-cli",
        tag: "Terminal-First",
        title: "Antigravity CLI",
        description: "The lightweight, fast, terminal-first surface to work with Antigravity agents. Run autonomous coding agents, execute shell commands directly, and manage background subagents all from your keyboard.",
        badge: "Fast & Scriptable",
        cta: {
          label: "View CLI Docs",
          href: "#",
        },
        previewType: "terminal",
        terminalSnippet: {
          prompt: "user@workstation ~/project $",
          commands: [
            { cmd: "agy spawn 'Refactor auth middleware to use Ed25519 tokens' --bg" },
            { output: "✔ Agent sub-702 started [branch: auth-jwt-ed25519]" },
            { cmd: "agy status --all" },
            { output: "  ● sub-702 (Auth Refactor)    -> running [step 4/6: running test suite]" },
            { output: "  ● sub-701 (Landing Page Sync)-> done [PR #142 created]" },
            { cmd: "agy merge sub-701 --verify" },
            { output: "✔ 18 tests passed. Clean git worktree. Merged to master." },
          ],
        },
      },
      {
        id: "antigravity-ide",
        tag: "IDE Integration",
        title: "Antigravity IDE",
        description: "The fully-featured, agentic IDE. Complete with the agent manager, artifacts, and a deep understanding of your codebase.",
        badge: "Native Extensions",
        cta: {
          label: "Download IDE",
          href: "#download",
        },
        previewType: "interactive-ui",
        uiMockup: {
          type: "ide",
          accentColor: "#749BFF",
        },
      },
      {
        id: "antigravity-sdk",
        tag: "Extensible Core",
        title: "Antigravity SDK",
        description: "Prototype custom agents leveraging Antigravity's harness with minimal code. Simple Python & TypeScript scripts to iterate on agentic applications, automate software engineering tasks, and run evaluations on top of the Antigravity agent harness.",
        badge: "Python & TypeScript",
        cta: {
          label: "Explore SDK",
          href: "#",
        },
        previewType: "code",
        codeSnippet: {
          language: "python",
          filename: "custom_agent.py",
          code: `from antigravity import Agent, Tool, Workspace

@Tool(name="run_eval")
def run_eval(benchmark: str) -> dict:
    return {"accuracy": 0.962, "latency_ms": 140}

agent = Agent(
    model="gemini-3.7-flash",
    workspace=Workspace.current(),
    tools=[run_eval],
    system_prompt="You are an autonomous evaluation subagent."
)

# Launch parallel reasoning session
result = agent.run("Audit code security and generate verification plan.")
print(f"Artifact created: {result.artifact_uri}")`,
        },
      },
    ],
  },

  useCases: {
    title: "Built for developers for the agent-first era",
    subtitle: "Google Antigravity is built for user trust, whether you're a professional developer working in a large enterprise codebase, a hobbyist vibe-coding in their spare time, or anyone in between.",
    items: [
      {
        id: "fullstack",
        role: "Full stack developer",
        tagline: "Ship production-ready features with verified artifacts",
        description: "Build production-ready applications with confidence with thoroughly designed artifacts, automated unit tests, and comprehensive verification runs.",
        youtubeEmbedUrl: "https://www.youtube.com/embed/htV29JrMXmA?si=xDz2S4e14LA97_iE",
        thumbnailGradient: "from-blue-600/30 via-indigo-600/20 to-purple-600/30",
        cta: {
          label: "View case",
          href: "#",
        },
        keyFeatures: [
          "Full codebase context indexing",
          "Automated end-to-end testing verification",
          "Artifact planning & live progress diffs",
        ],
      },
      {
        id: "enterprise",
        role: "Enterprise developer",
        tagline: "Empower large engineering teams with scale and safety",
        description: "Google Antigravity empowers the next era of enterprise builders with private workspace isolation, role-based tool policies, and multi-repo coordination.",
        youtubeEmbedUrl: "https://www.youtube.com/embed/B4do6xuIgD4?si=Wdrd2haIwDE1MMSe",
        thumbnailGradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/30",
        cta: {
          label: "View case",
          href: "#",
        },
        keyFeatures: [
          "SOC2 & Enterprise compliance controls",
          "Sandboxed terminal execution boundaries",
          "Collaborative agent fleet management",
        ],
      },
      {
        id: "frontend",
        role: "Frontend developer",
        tagline: "Streamline UI development with browser-in-the-loop",
        description: "Streamline UX development by leveraging browser-in-the-loop agents to inspect DOM elements, verify responsive layouts, and automate styling refinements.",
        youtubeEmbedUrl: "https://www.youtube.com/embed/yiHKlPuZ73c?si=Wdrd2haIwDE1MMSe",
        thumbnailGradient: "from-amber-600/30 via-rose-600/20 to-orange-600/30",
        cta: {
          label: "View case",
          href: "#",
        },
        keyFeatures: [
          "Live browser UI inspection & capture",
          "Instant Tailwind & React component tweaking",
          "Design system token adherence",
        ],
      },
    ],
  },

  solutions: {
    title: "Available for every developer and organization",
    subtitle: "Get started for free on your local workstation, or scale across your entire team.",
    cards: [
      {
        id: "developers",
        badge: "Available at no charge",
        tier: "For developers",
        heading: "Achieve new heights",
        description: "Everything you need to write, test, and ship software with local autonomous agents on your own hardware.",
        features: [
          "Antigravity 2.0 Command Center",
          "Fast Antigravity CLI with subagents",
          "VS Code & JetBrains IDE Extensions",
          "Unlimited local workspaces and projects",
          "Built-in Gemini 3.7 Flash & Pro support",
        ],
        cta: {
          label: "Download Now",
          href: "#download",
          variant: "primary",
        },
        highlighted: true,
      },
      {
        id: "organizations",
        badge: "Now Available!",
        tier: "For organizations",
        heading: "Level up your entire team",
        description: "Enterprise-ready agent orchestration, shared custom skills, audit logs, and unified team collaboration.",
        features: [
          "Centralized Agent Fleet Management",
          "Shared Team Custom Skills & Rules",
          "Enterprise SSO & Role-Based Access Control",
          "Advanced Security & Audit Logs",
          "Dedicated 24/7 Enterprise Support",
        ],
        cta: {
          label: "Read More",
          href: "#",
          variant: "secondary",
        },
        highlighted: false,
      },
    ],
  },

  blogs: {
    title: "Latest Blogs",
    subtitle: "Stay up to date with product updates, model launches, and agent tutorials.",
    viewAllCta: {
      label: "View all posts",
      href: "#",
    },
    posts: [
      {
        id: "vcs-experience",
        title: "Improving the Version Control Experience",
        date: "Aug 24, 2026",
        category: "Product",
        readTime: "4 min read",
        href: "#",
        summary: "Seamless branch synchronization, automated merge conflict resolution, and PR summaries with Antigravity subagents.",
        gradient: "from-blue-500/20 to-indigo-500/20",
      },
      {
        id: "remote-control",
        title: "Antigravity Anywhere with Remote Control",
        date: "Aug 21, 2026",
        category: "Product",
        readTime: "5 min read",
        href: "#",
        summary: "Supervise long-running coding agents from your phone, tablet, or browser with end-to-end encrypted remote access.",
        gradient: "from-purple-500/20 to-pink-500/20",
      },
      {
        id: "gemini-enterprise",
        title: "Bringing Antigravity to Gemini Enterprise",
        date: "Aug 20, 2026",
        category: "Enterprise",
        readTime: "6 min read",
        href: "#",
        summary: "Agentic workflows for every enterprise developer with unified billing, data governance, and org-wide agent templates.",
        gradient: "from-emerald-500/20 to-teal-500/20",
      },
      {
        id: "ide-extensions",
        title: "Introducing IDE Extensions for VS Code & JetBrains",
        date: "Aug 20, 2026",
        category: "Product",
        readTime: "3 min read",
        href: "#",
        summary: "Inline diffs, artifact sidebar, and instant terminal triggers directly inside your favorite code editor.",
        gradient: "from-cyan-500/20 to-blue-500/20",
      },
      {
        id: "gemini-3-7-flash",
        title: "Gemini 3.7 Flash in Google Antigravity",
        date: "Aug 13, 2026",
        category: "Model",
        readTime: "5 min read",
        href: "#",
        summary: "Ultra-fast hybrid reasoning mode delivering breakthrough subagent speed and complex architectural planning.",
        gradient: "from-amber-500/20 to-orange-500/20",
      },
      {
        id: "custom-agents",
        title: "Introducing Custom Agents and Skills",
        date: "Aug 12, 2026",
        category: "Product",
        readTime: "4 min read",
        href: "#",
        summary: "Build domain-specific subagents equipped with specialized toolsets, knowledge bases, and custom bash scripts.",
        gradient: "from-rose-500/20 to-red-500/20",
      },
    ],
  },

  downloadSection: {
    title: "Download Google Antigravity",
    subtitle: "Experience liftoff with the next-generation agent platform. Choose your platform below.",
    platforms: [
      {
        os: "macos-silicon",
        name: "Apple Silicon (M1/M2/M3/M4)",
        icon: "apple",
        downloadUrl: "https://antigravity.google/download/mac-arm64",
        version: "v2.4.0",
        fileSize: "148 MB",
        chipDetail: "Universal .dmg for Apple Silicon",
      },
      {
        os: "macos-intel",
        name: "Intel Mac (x86_64)",
        icon: "apple",
        downloadUrl: "https://antigravity.google/download/mac-x64",
        version: "v2.4.0",
        fileSize: "152 MB",
        chipDetail: ".dmg for Intel Macs",
      },
      {
        os: "windows",
        name: "Windows 11 / 10 (x64)",
        icon: "windows",
        downloadUrl: "https://antigravity.google/download/windows-x64",
        version: "v2.4.0",
        fileSize: "135 MB",
        chipDetail: "64-bit installer (.exe / .msi)",
      },
      {
        os: "linux",
        name: "Linux (.deb / .rpm / .AppImage)",
        icon: "linux",
        downloadUrl: "https://antigravity.google/download/linux",
        version: "v2.4.0",
        fileSize: "128 MB",
        chipDetail: "Debian, Fedora, Arch, Ubuntu",
      },
    ],
    cliQuickInstall: {
      label: "Or install the fast CLI via shell:",
      command: "curl -fsSL https://antigravity.google/install.sh | bash",
    },
  },

  footer: {
    tagline: "Experience liftoff with the next-gen agent platform.",
    brandName: "Google Antigravity",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Download", href: "#download" },
          { label: "Antigravity 2.0", href: "#features" },
          { label: "CLI Surface", href: "#features" },
          { label: "IDE Extensions", href: "#features" },
          { label: "Python SDK", href: "#features" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Product Docs", href: "#" },
          { label: "Changelog", href: "#" },
          { label: "Press Releases", href: "#" },
          { label: "Blog", href: "#blogs" },
          { label: "Support", href: "#" },
        ],
      },
      {
        title: "Solutions",
        links: [
          { label: "For Developers", href: "#solutions" },
          { label: "For Enterprise", href: "#solutions" },
          { label: "Pricing", href: "#solutions" },
          { label: "Use Cases", href: "#use-cases" },
          { label: "Remote Control", href: "https://antigravity.google/remote" },
        ],
      },
      {
        title: "About Google",
        links: [
          { label: "About Google", href: "https://about.google" },
          { label: "Google Products", href: "https://about.google/products" },
          { label: "Privacy Policy", href: "https://policies.google.com/privacy" },
          { label: "Terms of Service", href: "https://policies.google.com/terms" },
          { label: "Cookie Preferences", href: "#" },
        ],
      },
    ],
    bottomLinks: [
      { label: "Privacy", href: "https://policies.google.com/privacy" },
      { label: "Terms", href: "https://policies.google.com/terms" },
      { label: "About Google", href: "https://about.google" },
      { label: "Google Products", href: "https://about.google/products" },
      { label: "Manage Cookies", href: "#" },
    ],
    copyright: "© 2026 Google LLC. All rights reserved.",
  },
};
