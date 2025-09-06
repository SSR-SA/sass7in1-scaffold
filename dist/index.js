"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSass7in1 = setupSass7in1;
// src/index.ts
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const partials_1 = require("./partials");
async function addScssImportToFile(filePath, importPath) {
    if (!(await fs_extra_1.default.pathExists(filePath)))
        return false;
    let content = await fs_extra_1.default.readFile(filePath, "utf-8");
    const importStatement = `import '${importPath}';`;
    if (content.includes(importStatement)) {
        return false; // already imported
    }
    content = `${importStatement}\n${content}`;
    await fs_extra_1.default.writeFile(filePath, content);
    return true;
}
async function setupSass7in1() {
    for (const folder of partials_1.folders) {
        await fs_extra_1.default.ensureDir(path_1.default.join(process.cwd(), folder));
    }
    for (const [filePath, content] of Object.entries(partials_1.partials)) {
        await fs_extra_1.default.writeFile(path_1.default.join(process.cwd(), filePath), content.trim());
    }
    const cwd = process.cwd();
    // Next.js app router layout files
    const nextAppLayoutTsx = path_1.default.join(cwd, "src/app/layout.tsx");
    const nextAppLayoutJsx = path_1.default.join(cwd, "src/app/layout.jsx");
    // Next.js pages _app files
    const nextAppTsx = path_1.default.join(cwd, "src/pages/_app.tsx");
    const nextAppJsx = path_1.default.join(cwd, "src/pages/_app.jsx");
    // React entry files
    const reactIndexTsx = path_1.default.join(cwd, "src/index.tsx");
    const reactIndexJsx = path_1.default.join(cwd, "src/index.jsx");
    const reactIndexJs = path_1.default.join(cwd, "src/index.js");
    // Vite React main entry files
    const viteMainTsx = path_1.default.join(cwd, "src/main.tsx");
    const viteMainJsx = path_1.default.join(cwd, "src/main.jsx");
    let changed = false;
    if (await fs_extra_1.default.pathExists(nextAppLayoutTsx)) {
        changed = (await addScssImportToFile(nextAppLayoutTsx, "../styles/main.scss")) || changed;
    }
    else if (await fs_extra_1.default.pathExists(nextAppLayoutJsx)) {
        changed = (await addScssImportToFile(nextAppLayoutJsx, "../styles/main.scss")) || changed;
    }
    else if (await fs_extra_1.default.pathExists(nextAppTsx)) {
        changed = (await addScssImportToFile(nextAppTsx, "../styles/main.scss")) || changed;
    }
    else if (await fs_extra_1.default.pathExists(nextAppJsx)) {
        changed = (await addScssImportToFile(nextAppJsx, "../styles/main.scss")) || changed;
    }
    else if (await fs_extra_1.default.pathExists(reactIndexTsx)) {
        changed = (await addScssImportToFile(reactIndexTsx, "./styles/main.scss")) || changed;
    }
    else if (await fs_extra_1.default.pathExists(reactIndexJsx)) {
        changed = (await addScssImportToFile(reactIndexJsx, "./styles/main.scss")) || changed;
    }
    else if (await fs_extra_1.default.pathExists(reactIndexJs)) {
        changed = (await addScssImportToFile(reactIndexJs, "./styles/main.scss")) || changed;
    }
    else if (await fs_extra_1.default.pathExists(viteMainTsx)) {
        changed = (await addScssImportToFile(viteMainTsx, "./styles/main.scss")) || changed;
    }
    else if (await fs_extra_1.default.pathExists(viteMainJsx)) {
        changed = (await addScssImportToFile(viteMainJsx, "./styles/main.scss")) || changed;
    }
    console.log("7-in-1 Sass architecture scaffold created successfully.");
    if (changed) {
        console.log("Imported main.scss into your main layout/entry file.");
    }
    else {
        console.log("No main layout/entry file found or import already exists.");
    }
}
//# sourceMappingURL=index.js.map