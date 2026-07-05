# Component Library Package

A React component library built with `tsup` and styled with Mantine v7.

## Contents

- `Button` — Mantine-based button component
- `Providers` — Wraps children with `MantineProvider`, handles Mantine CSS

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
import { Button, Providers } from "@local/components";

function App() {
  return (
    <Providers>
      <Button onClick={() => console.log("clicked")}>Click me</Button>
    </Providers>
  );
}
```

The `Providers` component is only needed once at the root of your application.
