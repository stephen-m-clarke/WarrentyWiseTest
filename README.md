# WarrentyWiseTest

Monorepo (npm workspaces) with two packages:

| Package | Path | Description |
|---------|------|-------------|
| `@local/components` | `component-library-package/` | React component library built with `tsup`, using Mantine v7 |
| `store` | `store/` | Vite + React + TypeScript app consuming `@local/components` |

## Quick Start

```bash
npm install
npm run dev
```

## Commands

```bash
npm run build           # Build library then app
npm test                # Run all workspace tests
npm run test:components # Run component library tests only
npm run test:store      # Run store app tests only
npm run dev             # Start the store dev server
```
