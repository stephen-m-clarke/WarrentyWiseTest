import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { Image } from './Image';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('Image', () => {
  it('renders with alt text', () => {
    renderWithProvider(<Image src="https://example.com/img.jpg" alt="Test image" />);

    const img = screen.getByAltText('Test image');

    expect(img).toBeInTheDocument();
  });
});
