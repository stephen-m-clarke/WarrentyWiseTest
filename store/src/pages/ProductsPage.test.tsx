import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import { LibraryProvider } from "@local/components";
import { MemoryRouter } from "react-router";
import ProductsPage from "./ProductsPage";
import { getProducts } from "../api/api";
import { Product } from "../interfaces/Product";

vi.mock("../api/api");

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Test Product 1",
    price: 29.99,
    description: "Description 1",
    category: "men's clothing",
    image: "/test.jpg",
    rating: { rate: 4.5, count: 100 },
  },
  {
    id: 2,
    title: "Test Product 2",
    price: 49.99,
    description: "Description 2",
    category: "women's clothing",
    image: "/test.jpg",
    rating: { rate: 3.5, count: 50 },
  },
  {
    id: 3,
    title: "Electronics Item",
    price: 199.99,
    description: "Description 3",
    category: "electronics",
    image: "/test.jpg",
    rating: { rate: 4.0, count: 75 },
  },
];

async function renderWithRouter(ui: React.ReactElement) {
  await act(async () => {
    return render(
      <LibraryProvider>
        <MemoryRouter>{ui}</MemoryRouter>
      </LibraryProvider>,
    );
  });
}

describe("ProductsPage", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("renders products after loading", async () => {
    vi.mocked(getProducts).mockResolvedValueOnce(mockProducts);

    await renderWithRouter(<ProductsPage />);

    // Product appears in both "All products" and category tab
    const products = await screen.findAllByText("Test Product 1");
    expect(products).toHaveLength(2);
    const products2 = await screen.findAllByText("Test Product 2");
    expect(products2).toHaveLength(2);
  });

  it("shows search input and max price slider", async () => {
    vi.mocked(getProducts).mockResolvedValueOnce(mockProducts);

    await renderWithRouter(<ProductsPage />);

    await screen.findByLabelText("Search");
    await screen.findByText("Max price");
  });

  it("shows category tabs", async () => {
    vi.mocked(getProducts).mockResolvedValueOnce(mockProducts);

    await renderWithRouter(<ProductsPage />);

    await screen.findByText("All products");
    await screen.findByText("Men's Clothing");
    await screen.findByText("Women's Clothing");
    await screen.findByText("Electronics");
  });

  it("shows error message when API fails", async () => {
    vi.mocked(getProducts).mockRejectedValueOnce(new Error("API Error"));

    await renderWithRouter(<ProductsPage />);

    await screen.findByText("API Error");
  });
});
