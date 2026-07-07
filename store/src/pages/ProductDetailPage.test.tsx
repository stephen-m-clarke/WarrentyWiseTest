import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import { LibraryProvider } from "@local/components";
import { MemoryRouter } from "react-router-dom";
import ProductDetailPage from "./ProductDetailPage";
import { getProductById } from "../api/api";
import { Product } from "src/interfaces/Product";

vi.mock("../api/api");

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  price: 29.99,
  description: "A test product description",
  category: "men's clothing",
  image: "/test-image.jpg",
  rating: { rate: 4.5, count: 120 },
};

async function renderWithRouter(
  ui: React.ReactElement,
  initialEntries = ["/product/1"],
) {
  await act(async () => {
    return render(
      <LibraryProvider>
        <MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>
      </LibraryProvider>,
    );
  });
}

describe("ProductDetailPage", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("renders product details after loading", async () => {
    vi.mocked(getProductById).mockResolvedValueOnce(mockProduct);

    await renderWithRouter(<ProductDetailPage />);

    await screen.findByText("Test Product");
    await screen.findByText("$29.99");
    await screen.findByText("A test product description");
  });

  it("shows back to products link", async () => {
    vi.mocked(getProductById).mockResolvedValueOnce(mockProduct);

    await renderWithRouter(<ProductDetailPage />);

    await screen.findByText("← Back to Products");
  });

  it("shows star rating with review count", async () => {
    vi.mocked(getProductById).mockResolvedValueOnce(mockProduct);

    await renderWithRouter(<ProductDetailPage />);

    await screen.findByText("(120 reviews)");
  });

  it("shows product category", async () => {
    vi.mocked(getProductById).mockResolvedValueOnce(mockProduct);

    await renderWithRouter(<ProductDetailPage />);

    const category = await screen.findByText((content) =>
      content.toLowerCase() === "men's clothing",
    );
    expect(category).toBeInTheDocument();
  });

  it("shows product image", async () => {
    vi.mocked(getProductById).mockResolvedValueOnce(mockProduct);

    await renderWithRouter(<ProductDetailPage />);

    const img = await screen.findByAltText("Test Product");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test-image.jpg");
  });

  it("shows error message when API fails", async () => {
    vi.mocked(getProductById).mockRejectedValueOnce(
      new Error("Failed to load product"),
    );

    await renderWithRouter(<ProductDetailPage />);

    await screen.findByText("Failed to load product");
  });
});