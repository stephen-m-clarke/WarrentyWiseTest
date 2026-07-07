import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LibraryProvider } from '@local/components';
import { ProductsList } from './ProductsList';
import type { Product } from '../../interfaces/Product';

function renderWithProvider(ui: React.ReactElement) {
  return render(
    <MemoryRouter>
      <LibraryProvider>{ui}</LibraryProvider>
    </MemoryRouter>,
  );
}

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Product One',
    price: 10.99,
    description: 'First product',
    category: "men's clothing",
    image: 'https://example.com/1.jpg',
    rating: { rate: 4.0, count: 10 },
  },
  {
    id: 2,
    title: 'Product Two',
    price: 20.99,
    description: 'Second product',
    category: "women's clothing",
    image: 'https://example.com/2.jpg',
    rating: { rate: 3.5, count: 20 },
  },
];

describe('ProductsList', () => {
  it('renders all product titles', () => {
    renderWithProvider(<ProductsList products={mockProducts} />);

    const titleOne = screen.getByText('Product One');
    const titleTwo = screen.getByText('Product Two');

    expect(titleOne).toBeInTheDocument();
    expect(titleTwo).toBeInTheDocument();
  });

  it('renders all product prices', () => {
    renderWithProvider(<ProductsList products={mockProducts} />);

    const priceOne = screen.getByText('$10.99');
    const priceTwo = screen.getByText('$20.99');

    expect(priceOne).toBeInTheDocument();
    expect(priceTwo).toBeInTheDocument();
  });

  it('renders all product images', () => {
    renderWithProvider(<ProductsList products={mockProducts} />);

    const imgOne = screen.getByAltText('Product One');
    const imgTwo = screen.getByAltText('Product Two');

    expect(imgOne).toBeInTheDocument();
    expect(imgTwo).toBeInTheDocument();
  });

  it('renders an empty grid when no products', () => {
    renderWithProvider(<ProductsList products={[]} />);

    const titles = screen.queryByText(/Product/);
    const prices = screen.queryByText(/\$/);

    expect(titles).toBeNull();
    expect(prices).toBeNull();
  });
});
