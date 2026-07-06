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

## Development

```bash
# Install dependencies
npm install

# Build the library
npm --workspace component-library-package run build

# Run tests
npm --workspace @local/components run test
```

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
