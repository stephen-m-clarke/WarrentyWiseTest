import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { Header } from './Header';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('Header', () => {
  it('renders children', () => {
    renderWithProvider(<Header>My App</Header>);
    expect(screen.getByText('My App')).toBeInTheDocument();
  });

  it('renders a header element', () => {
    renderWithProvider(<Header>Test</Header>);
    expect(screen.getByText('Test').tagName).toBe('HEADER');
  });
});
