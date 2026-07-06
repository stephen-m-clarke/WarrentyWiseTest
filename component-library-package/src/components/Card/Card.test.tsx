import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { Card } from './Card';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('Card', () => {
  it('renders children', () => {
    renderWithProvider(<Card>Hello</Card>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
