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

## API

The `src/api/api.ts` file provides `getProducts()` and `getProductById(id)` which fetch from Fake Store API and return typed `Product` objects.
