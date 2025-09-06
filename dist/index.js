"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSass7in1 = setupSass7in1;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const partials_1 = require("./partials");
async function setupSass7in1() {
    for (const folder of partials_1.folders) {
        await fs_extra_1.default.ensureDir(path_1.default.join(process.cwd(), folder));
    }
    for (const [filePath, content] of Object.entries(partials_1.partials)) {
        await fs_extra_1.default.writeFile(path_1.default.join(process.cwd(), filePath), content.trim());
    }
    console.log("7-in-1 Sass architecture scaffold created successfully.");
}
//# sourceMappingURL=index.js.map