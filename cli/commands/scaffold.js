import fs from "node:fs";
import path from "node:path";
import { log, colors, banner, promptSelect, promptInput } from "../terminal.js";

const SCAFFOLD_OPTIONS = [
  { label: "New Feature Bento Tab", value: "feature", desc: "Add a new tool/feature tab in the bento explorer" },
  { label: "New Use Case / Role Story", value: "usecase", desc: "Add a role-based developer story card" },
  { label: "New Blog Article", value: "blog", desc: "Add a new product announcement or technical article" },
  { label: "Update Brand & SEO Info", value: "brand", desc: "Change product name, tagline, and metadata" },
];

export async function runScaffold(subcommand, options = {}) {
  let choice = subcommand;

  if (!choice || options.interactive) {
    if (!options.quiet) {
      console.log(banner);
      console.log(`${colors.bold}${colors.brightWhite}🏗️ Interactive Code & Config Scaffolder${colors.reset}\n`);
    }
    choice = await promptSelect("Select Scaffolding Target", SCAFFOLD_OPTIONS);
    if (choice === "exit") {
      log.info("Scaffolding cancelled.");
      return true;
    }
  }

  const configPath = path.resolve(process.cwd(), "src/config/site.config.ts");
  if (!fs.existsSync(configPath)) {
    log.error(`Config file not found at: ${configPath}`);
    return false;
  }

  let content = fs.readFileSync(configPath, "utf-8");

  switch (choice.toLowerCase()) {
    case "feature": {
      console.log(`\n${colors.bold}${colors.brightWhite}📦 Scaffolding New Feature Bento Item${colors.reset}`);
      const title = await promptInput("Feature Title", "AI Code Reviewer");
      const tag = await promptInput("Tag Label", "Quality & Lint");
      const description = await promptInput("Short Description", "Automated code review agent with real-time lint feedback.");
      const badge = await promptInput("Badge Text", "Beta");
      const previewType = await promptInput("Preview Type (terminal/code/interactive-ui)", "terminal");

      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const newItem = `      {
        id: "${id}",
        tag: "${tag}",
        title: "${title}",
        description: "${description}",
        badge: "${badge}",
        cta: {
          label: "Learn More",
          href: "#",
        },
        previewType: "${previewType}",
        terminalSnippet: {
          prompt: "user@workstation ~/project $",
          commands: [
            { cmd: "gla review --diff" },
            { output: "✔ 0 security vulnerabilities found. 2 style suggestions generated." },
          ],
        },
      },`;

      // Insert right before closing bracket of features.items
      const marker = "    items: [";
      if (content.includes(marker)) {
        content = content.replace(marker, `${marker}\n${newItem}`);
        fs.writeFileSync(configPath, content, "utf-8");
        log.success(`Scaffolded new feature '${title}' into src/config/site.config.ts!`);
      } else {
        log.warn("Could not locate features.items array in site.config.ts.");
      }
      break;
    }

    case "usecase":
    case "use-case": {
      console.log(`\n${colors.bold}${colors.brightWhite}🧭 Scaffolding New Use Case Story${colors.reset}`);
      const role = await promptInput("Developer Role Title", "DevOps Engineer");
      const tagline = await promptInput("Hero Tagline", "Automate infrastructure blueprints with confidence");
      const description = await promptInput("Story Description", "Streamline Kubernetes manifests, Docker builds, and CI pipelines with autonomous agents.");
      const id = role.toLowerCase().replace(/[^a-z0-9]+/g, "-");

      const newUseCase = `      {
        id: "${id}",
        role: "${role}",
        tagline: "${tagline}",
        description: "${description}",
        youtubeEmbedUrl: "https://www.youtube.com/embed/SVCBA-pBgt0?autoplay=1",
        thumbnailGradient: "from-blue-600/30 via-indigo-600/20 to-purple-600/30",
        cta: {
          label: "View case",
          href: "#",
        },
        keyFeatures: [
          "Automated infrastructure audits",
          "One-click container deployments",
          "Continuous health checks",
        ],
      },`;

      const itemsMarker = "    items: [";
      if (content.includes(itemsMarker)) {
        content = content.replace(itemsMarker, `${itemsMarker}\n${newUseCase}`);
        fs.writeFileSync(configPath, content, "utf-8");
        log.success(`Scaffolded new use case story '${role}' into src/config/site.config.ts!`);
      } else {
        log.warn("Could not locate useCases.items in site.config.ts.");
      }
      break;
    }

    case "blog": {
      console.log(`\n${colors.bold}${colors.brightWhite}📝 Scaffolding New Blog Article${colors.reset}`);
      const title = await promptInput("Article Title", "Announcing Antigravity v3.0");
      const category = await promptInput("Category (Product/Model/Engineering/Enterprise)", "Product");
      const readTime = await promptInput("Read Time", "4 min read");
      const summary = await promptInput("Summary Paragraph", "Explore breakthrough speed improvements, persistent agent memory, and multi-workspace support.");
      const date = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

      const newPost = `      {
        id: "${id}",
        title: "${title}",
        date: "${date}",
        category: "${category}",
        readTime: "${readTime}",
        href: "#",
        summary: "${summary}",
        gradient: "from-blue-500/20 to-indigo-500/20",
      },`;

      const postsMarker = "    posts: [";
      if (content.includes(postsMarker)) {
        content = content.replace(postsMarker, `${postsMarker}\n${newPost}`);
        fs.writeFileSync(configPath, content, "utf-8");
        log.success(`Scaffolded new blog article '${title}' into src/config/site.config.ts!`);
      } else {
        log.warn("Could not locate blogs.posts in site.config.ts.");
      }
      break;
    }

    case "brand": {
      console.log(`\n${colors.bold}${colors.brightWhite}🎨 Rebranding Configuration${colors.reset}`);
      const name = await promptInput("Product Brand Name", "MyProduct");
      const tagline = await promptInput("Tagline", "Experience liftoff");
      const description = await promptInput("SEO Meta Description", "Ship faster with autonomous AI developer intelligence.");

      content = content.replace(/name:\s*"[^"]*"/, `name: "${name}"`);
      content = content.replace(/tagline:\s*"[^"]*"/, `tagline: "${tagline}"`);
      content = content.replace(/description:\s*"[^"]*"/, `description: "${description}"`);
      fs.writeFileSync(configPath, content, "utf-8");
      log.success(`Updated brand settings for '${name}' in src/config/site.config.ts!`);
      break;
    }

    default:
      log.error(`Unknown scaffold target: '${choice}'. Use: feature, usecase, blog, brand`);
      return false;
  }

  return true;
}
