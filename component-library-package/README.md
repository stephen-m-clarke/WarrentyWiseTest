# Component Library Package

A React component library built with `tsup` and styled with Mantine v9.

## Contents

All components are thin wrappers around `@mantine/core`. Each is exported alongside its props type from `src/index.ts`:

- `Header` — Header layout component (`HeaderProps`)
- `TabGroup` — Tabs component (`TabGroupProps`, `Tab`)
- `TextInput` — Text input component (`TextInputProps`)
- `Flex` — Mantine `Flex` layout wrapper (`FlexProps`)
- `SimpleGrid` — Mantine `SimpleGrid` layout wrapper (`SimpleGridProps`)
- `Text` — Mantine `Text` wrapper (`TextProps`)
- `Box` — Mantine `Box` wrapper (`BoxProps`)
- `Image` — Mantine `Image` wrapper (`ImageProps`)
- `Link` — Mantine `Anchor`/link wrapper (`LinkProps`)
- `Slider` — Mantine `Slider` wrapper (`SliderProps`)
- `LibraryProvider` — Wraps children with `MantineProvider` and imports the Mantine stylesheet (`LibraryProviderProps`)

## Required CSS

`LibraryProvider` imports `@mantine/core/styles.css` internally, so as long as you wrap your app root in `<LibraryProvider>`, the Mantine styles load automatically. If you do **not** use `LibraryProvider`, you must import the stylesheet manually:

```ts
import "@mantine/core/styles.css";
```

`LibraryProvider` accepts only `children` — it does **not** accept a custom Mantine `theme` prop, and no theme/token customization is exposed by the library.

## Runtime requirements

- **React 19** is a peer dependency (`react`, `react-dom` `^19`). It is not bundled into the library — `react` and `react-dom` are marked `external` in `tsup.config.ts` so the consuming app provides a single, shared React instance (required for React's hooks rules).
- Runtime dependency on `@mantine/core` and `@mantine/hooks` (v9). These are bundled into the build output (not externalized).

## Build output

The library is built with `tsup` (`tsup.config.ts`), entry `src/index.ts`:

## Scripts

```bash
npm run build           # Build the library (tsup)
npm test                # Run tests with Vitest
npm run storybook       # Start Storybook dev server on port 6007
npm run build-storybook # Build static Storybook site
```

## Testing

Tests use **Vitest** (not Jest). See the root README for details on Vitest conventions and the Arrange-Act-Assert (AAA) pattern.

## Usage

```tsx
import { Header, Text, LibraryProvider } from "@local/components";

function App() {
  return (
    <LibraryProvider>
      <Header />
      <Text>Hello from the component library</Text>
    </LibraryProvider>
  );
}
```

The `LibraryProvider` component is only needed once at the root of your application.
