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
npm test                # Run all workspace tests (vitest)
npm run test:components # Run component library tests only (vitest)
npm run test:store      # Run store app tests only (vitest)
npm run dev             # Start the store dev server
npm run storybook:components       # Start Storybook for component library (port 6006)
npm run storybook:store            # Start Storybook for store app (port 6006)
npm run build-storybook:components # Build static Storybook site (library)
npm run build-storybook:store      # Build static Storybook site (store)
```

## Testing

Both packages use **Vitest** instead of Jest. The API is nearly identical — `describe`, `it`, `expect` work the same way. The main difference is using `vi.fn()` instead of `jest.fn()` and `vi.resetAllMocks()` instead of `jest.resetAllMocks()`.

Tests follow the **Arrange-Act-Assert (AAA)** pattern:
- **Arrange** — set up the component, mocks, or data needed for the test
- **Act** — perform the action being tested (render, click, change, etc.)
- **Assert** — verify the expected outcome
