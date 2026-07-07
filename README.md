# WarrentyWiseTest

Monorepo (npm workspaces) with two packages:

| Package             | Path                         | Description                                                 |
| ------------------- | ---------------------------- | ----------------------------------------------------------- |
| `@local/components` | `component-library-package/` | React component library built with `tsup`, using Mantine v9 |
| `store`             | `store/`                     | Vite + React + TypeScript app consuming `@local/components` |

## Quick Start

```bash
npm install
npm run dev
```

## Commands

```bash
npm run build           # Build library then app
npm test                # Run all workspace tests (vitest)
npm run test:components # Run component library tests only (vitest)
npm run test:store      # Run store app tests only (vitest)
npm run dev             # Start the store dev server
npm run lint               # Lint all TypeScript files
npm run lint:fix           # Lint and auto-fix issues
npm run storybook:components       # Start Storybook for component library (port 6006)
npm run storybook:store            # Start Storybook for store app (port 6006)
npm run build-storybook:components # Build static Storybook site (library)
npm run build-storybook:store      # Build static Storybook site (store)
```

## How the workspace is linked

`@local/components` is consumed by `store` through **two complementary mechanisms**:

1. **npm workspace symlink** — `npm install` (or `npm ci`) creates a junction at `node_modules/@local/components` → `component-library-package/`.
2. **Vite/Vitest source alias** — `config/aliases.ts` maps `@local/components` directly to `component-library-package/src`.

Because of the source alias, the store runs against the library's **live TypeScript source**, so you do **not** need to build the library before running the store's dev server, tests, or Storybook.

## Shared configuration

- `eslint.config.js` — flat ESLint config (TypeScript, React, react-hooks, jsx-a11y) applied across the whole repo.
- `tsconfig.json` — base TypeScript config extended by both workspaces.
- `config/aliases.ts` — the `@local/components` path alias shared by the store's Vite and Vitest configs.
- `config/vitest.setup.js` — global test polyfills (`ResizeObserver`, `matchMedia`, `localStorage`) used by both packages.

## How to add a new component

1. Create the component folder: `component-library-package/src/components/<Name>/<Name>.tsx`.
2. Add co-located files: `<Name>.test.tsx` (Vitest + Testing Library) and `<Name>.stories.tsx` (Storybook).
3. Export the component **and its props type** from `component-library-package/src/index.ts`.
4. The library is built with `tsup` (`tsup.config.ts`): entry `src/index.ts`, outputs CJS + ESM + `.d.ts`, with `react`/`react-dom` externalized.

## Prerequisites

- **Node 20+** (CI uses Node 20 — see `.github/workflows/ci.yml`).
- After cloning, run `npm ci` at the repo root to install all workspace dependencies.
- Note: this repo currently uses high-major pre-release tooling — TypeScript `^6` and ESLint `^10`. Pin/verify these if replicating the environment elsewhere.

## Storybook

Both packages run their own Storybook instance on **port 6006**, so they cannot run simultaneously on the same port. Each package has its own `.storybook/` config and builds its own static site into `storybook-static/`.

## CI

`.github/workflows/ci.yml` runs on every push and pull request to `main` (Ubuntu, Node 20):

```bash
npm ci
npm run lint
npm test
npm run build
```

## Testing

Both packages use **Vitest** instead of Jest. The API is nearly identical — `describe`, `it`, `expect` work the same way. The main difference is using `vi.fn()` instead of `jest.fn()` and `vi.resetAllMocks()` instead of `jest.resetAllMocks()`.

Tests follow the **Arrange-Act-Assert (AAA)** pattern:

- **Arrange** — set up the component, mocks, or data needed for the test
- **Act** — perform the action being tested (render, click, change, etc.)
- **Assert** — verify the expected outcome
