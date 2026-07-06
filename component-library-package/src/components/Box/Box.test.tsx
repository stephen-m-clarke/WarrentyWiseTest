import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { Box } from './Box';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('Box', () => {
  it('renders children', () => {
    renderWithProvider(<Box>Content</Box>);

    const element = screen.getByText('Content');

    expect(element).toBeInTheDocument();
  });
});
