import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { SimpleGrid } from './SimpleGrid';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('SimpleGrid', () => {
  it('renders children', () => {
    renderWithProvider(<SimpleGrid><div>Item</div></SimpleGrid>);

    const element = screen.getByText('Item');

    expect(element).toBeInTheDocument();
  });
});
