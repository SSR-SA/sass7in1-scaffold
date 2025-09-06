#!/usr/bin/env node

import { Command } from "commander";
import { setupSass7in1 } from "./index";

const program = new Command();

program
  .name("sass-7in1-setup")
  .description("CLI to scaffold 7-in-1 Sass architecture")
  .version("1.0.0");

program
  .command("init")
  .description("Create Sass 7-in-1 folder structure and files")
  .action(() => {
    setupSass7in1().catch((err) => {
      console.error("Error:", err.message);
      process.exit(1);
    });
  });

program.parse(process.argv);
