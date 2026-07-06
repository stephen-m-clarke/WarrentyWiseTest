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

    const element = screen.getByText('My App');

    expect(element).toBeInTheDocument();
  });

  it('renders a header element', () => {
    renderWithProvider(<Header>Test</Header>);

    const element = screen.getByText('Test');

    expect(element.tagName).toBe('HEADER');
  });
});
