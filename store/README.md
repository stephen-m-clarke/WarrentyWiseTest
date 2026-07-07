# Store App

A Vite + React + TypeScript application that consumes `@local/components` (a Mantine v9-based component library) and fetches product data from the [Fake Store API](https://fakestoreapi.com).

## Development

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The dev server runs on **port 5173** (configurable in `vite.config.ts`).

### Routing

Routing uses `react-router-dom` v7. The route table is centralized in `src/routes.tsx`:

- `/` → redirects to `/products`
- `/products` → `ProductsPage` (search, price `Slider`, category `TabGroup`)
- `/product/:id` → `ProductDetailPage` (uses `useParams`)

## Build

```bash
npm run build
```

## Test

```bash
npm --workspace store run test
```

Tests use **Vitest** (not Jest). See the root README for details on Vitest conventions and the Arrange-Act-Assert (AAA) pattern.

## Storybook

```bash
npm run storybook       # Start Storybook on port 6006
npm run build-storybook # Build static Storybook site
```

## API

The `src/api/api.ts` file provides:

- `getProducts(): Promise<Product[]>` — `GET https://fakestoreapi.com/products`
- `getProductById(id: number | string): Promise<Product>` — `GET https://fakestoreapi.com/products/:id`

Both are wrapped by an internal `request<T>(path)` helper that uses `fetch` and throws `Error(\`Request failed with status ${status}\`)` on a non-OK response. The base URL is the constant `API_BASE_URL = "https://fakestoreapi.com"`.

Typed models live in `src/interfaces/`:

- `Product` — `{ id, title, price, description, category: ProductCategory, image, rating: ProductRating }`
- `ProductCategory` — union of `"men's clothing" | "jewelery" | "electronics" | "women's clothing"`
- `ProductRating` — `{ rate, count }`
