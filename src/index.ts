// src/index.ts
import fs from "fs-extra";
import path from "path";
import { folders, partials } from "./partials";

async function addScssImportToFile(filePath: string, importPath: string) {
  if (!(await fs.pathExists(filePath))) return false;

  let content = await fs.readFile(filePath, "utf-8");
  const importStatement = `import '${importPath}';`;

  if (content.includes(importStatement)) {
    return false; // already imported
  }

  content = `${importStatement}\n${content}`;
  await fs.writeFile(filePath, content);
  return true;
}

export async function setupSass7in1(): Promise<void> {
  for (const folder of folders) {
    await fs.ensureDir(path.join(process.cwd(), folder));
  }
  for (const [filePath, content] of Object.entries(partials)) {
    await fs.writeFile(path.join(process.cwd(), filePath), content.trim());
  }

  const cwd = process.cwd();

  // Next.js app router layout files
  const nextAppLayoutTsx = path.join(cwd, "src/app/layout.tsx");
  const nextAppLayoutJsx = path.join(cwd, "src/app/layout.jsx");

  // Next.js pages _app files
  const nextAppTsx = path.join(cwd, "src/pages/_app.tsx");
  const nextAppJsx = path.join(cwd, "src/pages/_app.jsx");

  // React entry files
  const reactIndexTsx = path.join(cwd, "src/index.tsx");
  const reactIndexJsx = path.join(cwd, "src/index.jsx");
  const reactIndexJs = path.join(cwd, "src/index.js");

  // Vite React main entry files
  const viteMainTsx = path.join(cwd, "src/main.tsx");
  const viteMainJsx = path.join(cwd, "src/main.jsx");

  let changed = false;

  if (await fs.pathExists(nextAppLayoutTsx)) {
    changed = (await addScssImportToFile(nextAppLayoutTsx, "../styles/main.scss")) || changed;
  } else if (await fs.pathExists(nextAppLayoutJsx)) {
    changed = (await addScssImportToFile(nextAppLayoutJsx, "../styles/main.scss")) || changed;
  } else if (await fs.pathExists(nextAppTsx)) {
    changed = (await addScssImportToFile(nextAppTsx, "../styles/main.scss")) || changed;
  } else if (await fs.pathExists(nextAppJsx)) {
    changed = (await addScssImportToFile(nextAppJsx, "../styles/main.scss")) || changed;
  } else if (await fs.pathExists(reactIndexTsx)) {
    changed = (await addScssImportToFile(reactIndexTsx, "./styles/main.scss")) || changed;
  } else if (await fs.pathExists(reactIndexJsx)) {
    changed = (await addScssImportToFile(reactIndexJsx, "./styles/main.scss")) || changed;
  } else if (await fs.pathExists(reactIndexJs)) {
    changed = (await addScssImportToFile(reactIndexJs, "./styles/main.scss")) || changed;
  } else if (await fs.pathExists(viteMainTsx)) {
    changed = (await addScssImportToFile(viteMainTsx, "./styles/main.scss")) || changed;
  } else if (await fs.pathExists(viteMainJsx)) {
    changed = (await addScssImportToFile(viteMainJsx, "./styles/main.scss")) || changed;
  }

  console.log("7-in-1 Sass architecture scaffold created successfully.");
  if (changed) {
    console.log("Imported main.scss into your main layout/entry file.");
  } else {
    console.log("No main layout/entry file found or import already exists.");
  }
}
