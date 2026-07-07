import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LibraryProvider } from '@local/components';
import { ProductListing } from './ProductListing';
import type { Product } from '../../interfaces/Product';

function renderWithProvider(ui: React.ReactElement) {
  return render(<LibraryProvider>{ui}</LibraryProvider>);
}

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  description: 'A test product',
  category: "men's clothing",
  image: 'https://example.com/img.jpg',
  rating: { rate: 4.5, count: 100 },
};

describe('ProductListing', () => {
  it('renders the product title', () => {
    renderWithProvider(<ProductListing product={mockProduct} />);

    const title = screen.getByText('Test Product');

    expect(title).toBeInTheDocument();
  });

  it('renders the product price', () => {
    renderWithProvider(<ProductListing product={mockProduct} />);

    const price = screen.getByText('$29.99');

    expect(price).toBeInTheDocument();
  });

  it('renders the product image with alt text', () => {
    renderWithProvider(<ProductListing product={mockProduct} />);

    const img = screen.getByAltText('Test Product');

    expect(img).toBeInTheDocument();
  });

  it('renders the star rating', () => {
    renderWithProvider(<ProductListing product={mockProduct} />);

    const rate = screen.getByText('4.5');

    expect(rate).toBeInTheDocument();
  });
});
