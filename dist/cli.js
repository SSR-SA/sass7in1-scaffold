#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const index_1 = require("./index");
const program = new commander_1.Command();
program
    .name("sass-7in1-setup")
    .description("CLI to scaffold 7-in-1 Sass architecture")
    .version("1.0.0");
program
    .command("init")
    .description("Create Sass 7-in-1 folder structure and files")
    .action(() => {
    (0, index_1.setupSass7in1)().catch((err) => {
        console.error("Error:", err.message);
        process.exit(1);
    });
});
program.parse(process.argv);
//# sourceMappingURL=cli.js.map