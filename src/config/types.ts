export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  ogImage?: string;
  twitterHandle?: string;
  themeColor?: string;
}

export interface BrandConfig {
  name: string;
  tagline?: string;
  logoType: "svg" | "text" | "custom";
  customSvgLogo?: string;
  contextMenu: {
    enabled: boolean;
    copySvgLabel: string;
    guidelinesLabel: string;
    guidelinesUrl: string;
  };
}

export interface DropdownItem {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  badge?: string;
  external?: boolean;
}

export interface DropdownGroup {
  heading?: string;
  items: DropdownItem[];
}

export interface NavItem {
  label: string;
  href?: string;
  badge?: string;
  external?: boolean;
  dropdown?: DropdownGroup[] | DropdownItem[];
}

export interface NavigationConfig {
  remoteControlBadge?: {
    enabled: boolean;
    label: string;
    href: string;
    tooltip?: string;
  };
  links: NavItem[];
  primaryCta: {
    label: string;
    href: string;
    icon?: string;
  };
}

export interface ParticleConfig {
  enabled: boolean;
  count: number;
  interactive: boolean;
  colors: string[];
  maxSpeed?: number;
  connectionDistance?: number;
}

export interface HeroConfig {
  headline: string;
  subheadline?: string;
  gradientWords?: string[];
  primaryCta: {
    label: string;
    href: string;
    icon?: string;
  };
  secondaryCta: {
    label: string;
    href: string;
    icon?: string;
  };
  video: {
    enabled: boolean;
    badge: string;
    title: string;
    youtubeEmbedUrl: string;
    thumbnailImage?: string;
    hoverText?: string;
  };
  particleField: ParticleConfig;
}

export interface FloatingIcon {
  name: string;
  symbol: string;
  label?: string;
  color?: string;
  x: number; // percentage from left
  y: number; // percentage from top
  size?: number; // size in px
  delay?: number;
}

export interface StatementConfig {
  badge?: string;
  headline: string;
  subtext?: string;
  floatingIcons: FloatingIcon[];
}

export interface CodeSnippet {
  language: string;
  filename?: string;
  code: string;
}

export interface TerminalCommand {
  cmd?: string;
  output?: string;
  isComment?: boolean;
}

export interface TerminalSnippet {
  prompt?: string;
  commands: TerminalCommand[];
}

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  badge?: string;
  cta?: {
    label: string;
    href: string;
  };
  previewType: "terminal" | "code" | "interactive-ui" | "graphic";
  codeSnippet?: CodeSnippet;
  terminalSnippet?: TerminalSnippet;
  uiMockup?: {
    type: "agent-manager" | "ide" | "cli" | "sdk";
    accentColor?: string;
  };
}

export interface FeaturesConfig {
  sectionTitle?: string;
  subtitle?: string;
  items: FeatureItem[];
}

export interface UseCaseItem {
  id: string;
  role: string;
  tagline: string;
  description: string;
  youtubeEmbedUrl?: string;
  thumbnailGradient?: string;
  cta: {
    label: string;
    href: string;
  };
  keyFeatures?: string[];
}

export interface UseCasesConfig {
  title: string;
  subtitle: string;
  items: UseCaseItem[];
}

export interface SolutionCard {
  id: string;
  badge: string;
  tier: string;
  heading: string;
  description: string;
  features: string[];
  cta: {
    label: string;
    href: string;
    variant: "primary" | "secondary";
  };
  highlighted?: boolean;
}

export interface SolutionsConfig {
  title: string;
  subtitle: string;
  cards: SolutionCard[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: "Product" | "Enterprise" | "Model" | "Engineering" | "Announcement";
  readTime?: string;
  href: string;
  summary?: string;
  gradient?: string;
}

export interface BlogsConfig {
  title: string;
  subtitle?: string;
  viewAllCta: {
    label: string;
    href: string;
  };
  posts: BlogPost[];
}

export interface DownloadPlatform {
  os: "macos-silicon" | "macos-intel" | "windows" | "linux";
  name: string;
  icon: "apple" | "windows" | "linux";
  downloadUrl: string;
  version: string;
  fileSize?: string;
  chipDetail?: string;
}

export interface DownloadSectionConfig {
  title: string;
  subtitle: string;
  platforms: DownloadPlatform[];
  cliQuickInstall: {
    label: string;
    command: string;
  };
}

export interface FooterColumn {
  title: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
    badge?: string;
  }>;
}

export interface FooterConfig {
  tagline: string;
  brandName: string;
  columns: FooterColumn[];
  bottomLinks: Array<{
    label: string;
    href: string;
  }>;
  copyright: string;
}

export interface SiteConfig {
  metadata: SiteMetadata;
  brand: BrandConfig;
  navigation: NavigationConfig;
  hero: HeroConfig;
  statement: StatementConfig;
  features: FeaturesConfig;
  useCases: UseCasesConfig;
  solutions: SolutionsConfig;
  blogs: BlogsConfig;
  downloadSection: DownloadSectionConfig;
  footer: FooterConfig;
}
