# Component Library Package

A React component library built with `tsup` and styled with Mantine v7.

## Contents

- `Button` — Mantine-based button component
- `Header` — Header layout component
- `TabGroup` — Tabs component
- `Card` — Card component with shadow and radius
- `SelectInput` — Select dropdown component
- `TextInput` — Text input component
- `LibraryProvider` — Wraps children with `MantineProvider`, handles Mantine CSS

## Scripts

```bash
npm run build           # Build the library (tsup)
npm test                # Run tests with Vitest
npm run storybook       # Start Storybook dev server on port 6006
npm run build-storybook # Build static Storybook site
```

## Testing

Tests use **Vitest** (not Jest). Vitest's API mirrors Jest closely — `describe`, `it`, `expect` work identically. The main difference is using `vi.fn()` instead of `jest.fn()` for mock functions. Vitest runs faster and integrates natively with Vite/tsup.

Tests follow the **Arrange-Act-Assert (AAA)** pattern — each test clearly separates setup (Arrange), the action being tested (Act), and the expected outcome (Assert).

## Usage

```tsx
import { Button, LibraryProvider } from "@local/components";

function App() {
  return (
    <LibraryProvider>
      <Button onClick={() => console.log("clicked")}>Click me</Button>
    </LibraryProvider>
  );
}

The `LibraryProvider` component is only needed once at the root of your application.
