# Component Library Package

This package contains a small React component library used by the Store app.

## Contents

- `Button` component exported from the package entry point
- Build output generated with `tsup`

## Development

From the repository root:

```bash
npm install
npm --workspace component-library-package run build
```

## Usage

Import the component from the package name:

```ts
import { Button } from "@local/components";
```
