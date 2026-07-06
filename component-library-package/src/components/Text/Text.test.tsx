import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { Text } from './Text';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('Text', () => {
  it('renders children', () => {
    renderWithProvider(<Text>Hello</Text>);

    const element = screen.getByText('Hello');

    expect(element).toBeInTheDocument();
  });
});
