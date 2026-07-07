import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LibraryProvider } from '@local/components';
import { ProductListingImage } from './ProductListingImage';

function renderWithProvider(ui: React.ReactElement) {
  return render(<LibraryProvider>{ui}</LibraryProvider>);
}

describe('ProductListingImage', () => {
  it('renders an image with the given alt text', () => {
    renderWithProvider(
      <ProductListingImage src="https://example.com/img.jpg" alt="Test product" />,
    );

    const img = screen.getByAltText('Test product');

    expect(img).toBeInTheDocument();
  });

  it('passes the src to the image', () => {
    renderWithProvider(
      <ProductListingImage src="https://example.com/img.jpg" alt="Test" />,
    );

    const img = screen.getByAltText('Test');

    expect(img).toHaveAttribute('src', 'https://example.com/img.jpg');
  });
});
