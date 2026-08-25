#!/usr/bin/env node

import { runCli } from "../cli/index.js";

runCli().catch((err) => {
  console.error("\x1b[31m✖ Unexpected CLI error:\x1b[0m", err);
  process.exit(1);
});
