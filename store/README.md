# Store App

A Vite + React + TypeScript application that consumes `@local/components` and fetches product data from the [Fake Store API](https://fakestoreapi.com).

## Development

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

## Build

```bash
npm run build
```

## Test

```bash
npm --workspace store run test
```

Tests use **Vitest** (not Jest). The API is nearly identical to Jest — `describe`, `it`, `expect` work the same way. Use `vi.fn()` instead of `jest.fn()` and `vi.resetAllMocks()` instead of `jest.resetAllMocks()`.

Tests follow the **Arrange-Act-Assert (AAA)** pattern — each test separates setup (Arrange), the action being tested (Act), and the expected outcome (Assert) into clearly distinct sections.

## Storybook

```bash
npm run storybook       # Start Storybook on port 6006
npm run build-storybook # Build static Storybook site
```

## API

The `src/api/api.ts` file provides `getProducts()` and `getProductById(id)` which fetch from Fake Store API and return typed `Product` objects.
