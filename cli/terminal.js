import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// ANSI color escape sequences
export const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  
  // Foreground
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  gray: "\x1b[90m",
  
  // Bright colors
  brightRed: "\x1b[91m",
  brightGreen: "\x1b[92m",
  brightYellow: "\x1b[93m",
  brightBlue: "\x1b[94m",
  brightMagenta: "\x1b[95m",
  brightCyan: "\x1b[96m",
  brightWhite: "\x1b[97m",
};

export const banner = `
${colors.brightCyan}  ╔═══════════════════════════════════════════════════════════════╗
  ║   ${colors.bold}${colors.brightWhite}✦ GOLD LABEL APPS${colors.reset}${colors.brightCyan}  //  ${colors.bold}${colors.brightYellow}MICROSITE CLI v0.1.1${colors.reset}${colors.brightCyan}                ║
  ║   ${colors.gray}The Autonomous Landing Page & Microsite Toolchain${colors.brightCyan}           ║
  ╚═══════════════════════════════════════════════════════════════╝${colors.reset}
`;

export const log = {
  info: (msg) => console.log(`${colors.brightBlue}ℹ${colors.reset}  ${msg}`),
  success: (msg) => console.log(`${colors.brightGreen}✔${colors.reset}  ${colors.bold}${msg}${colors.reset}`),
  warn: (msg) => console.log(`${colors.brightYellow}⚠${colors.reset}  ${colors.yellow}${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.brightRed}✖${colors.reset}  ${colors.red}${colors.bold}${msg}${colors.reset}`),
  step: (step, total, msg) => console.log(`${colors.dim}[${step}/${total}]${colors.reset} ${colors.brightCyan}➜${colors.reset}  ${msg}`),
  highlight: (label, value) => console.log(`   ${colors.dim}•${colors.reset} ${colors.bold}${label}:${colors.reset} ${colors.cyan}${value}${colors.reset}`),
  raw: (msg) => console.log(msg),
  divider: () => console.log(`${colors.gray}─────────────────────────────────────────────────────────────────${colors.reset}`),
};

export function createPrompt() {
  const rl = readline.createInterface({ input, output });
  return rl;
}

/**
 * Interactive single selection menu
 * @param {string} title
 * @param {Array<{ label: string, value: string, desc?: string }>} options
 * @returns {Promise<string>}
 */
export async function promptSelect(title, options) {
  const rl = createPrompt();
  try {
    console.log(`\n${colors.bold}${colors.brightWhite}${title}${colors.reset}`);
    options.forEach((opt, idx) => {
      const num = `${colors.brightCyan}${idx + 1}${colors.reset}`;
      const desc = opt.desc ? ` ${colors.dim}— ${opt.desc}${colors.reset}` : "";
      console.log(`  [${num}] ${colors.bold}${opt.label}${colors.reset}${desc}`);
    });
    console.log(`  [${colors.gray}0${colors.reset}] ${colors.gray}Exit${colors.reset}`);

    while (true) {
      const answer = await rl.question(`\n${colors.brightGreen}➜ Select option (1-${options.length}, or 0 to exit): ${colors.reset}`);
      const trimmed = answer.trim();
      if (trimmed === "0" || trimmed.toLowerCase() === "q" || trimmed.toLowerCase() === "exit") {
        return "exit";
      }
      const num = parseInt(trimmed, 10);
      if (!isNaN(num) && num >= 1 && num <= options.length) {
        return options[num - 1].value;
      }
      log.warn(`Invalid choice '${trimmed}'. Please enter a number between 1 and ${options.length}.`);
    }
  } finally {
    rl.close();
  }
}

/**
 * Text input prompt with fallback default
 * @param {string} question
 * @param {string} defaultValue
 * @returns {Promise<string>}
 */
export async function promptInput(question, defaultValue = "") {
  const rl = createPrompt();
  try {
    const hint = defaultValue ? ` ${colors.dim}(default: ${defaultValue})${colors.reset}` : "";
    const answer = await rl.question(`${colors.brightCyan}?${colors.reset} ${colors.bold}${question}${colors.reset}${hint}: `);
    const trimmed = answer.trim();
    return trimmed ? trimmed : defaultValue;
  } finally {
    rl.close();
  }
}

/**
 * Yes / No Confirmation prompt
 * @param {string} question
 * @param {boolean} defaultYes
 * @returns {Promise<boolean>}
 */
export async function promptConfirm(question, defaultYes = true) {
  const rl = createPrompt();
  try {
    const opts = defaultYes ? "[Y/n]" : "[y/N]";
    const answer = await rl.question(`${colors.brightYellow}?${colors.reset} ${colors.bold}${question}${colors.reset} ${colors.dim}${opts}${colors.reset}: `);
    const trimmed = answer.trim().toLowerCase();
    if (!trimmed) return defaultYes;
    return trimmed === "y" || trimmed === "yes";
  } finally {
    rl.close();
  }
}
