# sass7in1-scaffold

CLI tool to quickly scaffold a scalable Sass 7-in-1 architecture, optimized for Next.js, React, and Vite React projects. Automates folder structure setup, Sass partial creation, and injects main stylesheet imports into your app’s entry point for seamless styling integration.

## Features

- Creates the full 7-in-1 Sass folder structure and partials
- Supports Next.js (App Router and Pages Router), React, and Vite React projects
- Automatically imports the main Sass file into the appropriate entry or layout file
- Uses modern Sass modules (`@use` and `@forward`) for maintainable styling
- Strict TypeScript CLI with easy commands

## Installation

Install globally via npm:

```bash
npm install -g sass7in1-scaffold
```

Or use with `npx` without global install:

```bash
npx sass7in1-scaffold init
```

## Usage

In the root of your Next.js, React, or Vite React project, run:

```bash
sass7in1-scaffold init
```

This will:

- Create Sass folders under `src/styles` for abstracts, base, layout, pages, and sections
- Generate Sass partial files with variables, mixins, resets, grid, and main files
- Import the main Sass file into your main layout or entry component (`layout.tsx`, `_app.tsx`, `index.tsx`, or `main.tsx`)

## Sass 7-in-1 Architecture

The 7-in-1 architecture breaks down styles into these folders:

- **abstracts** — variables, mixins, functions
- **base** — resets, typography, animations
- **layout** — grid systems, containers
- **pages** — page-specific styles
- **sections** — modular page sections

This encourages modular, reusable, and scalable styles for large projects.

## Requirements

- Node.js 16 or above
- npm 7 or above
- Your project using Next.js, React, or Vite React with a standard folder structure

## Development

Clone the repo and install dependencies:

```bash
git clone https://github.com/SSR-SA/sass7in1-scaffold
cd sass7in1-scaffold
npm install
```

Build the CLI:

```bash
npm run build
```

Run locally with ts-node:

```bash
npm start init
```

## License

MIT License © Sai

## Contributing

Contributions and suggestions are welcome! Feel free to open issues or submit pull requests.

---

Made with ❤️ to simplify Sass architecture setup for modern frontend projects.
