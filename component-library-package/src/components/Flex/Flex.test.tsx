import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { Flex } from './Flex';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('Flex', () => {
  it('renders children', () => {
    renderWithProvider(<Flex><div>Hello</div></Flex>);

    const element = screen.getByText('Hello');

    expect(element).toBeInTheDocument();
  });
});
