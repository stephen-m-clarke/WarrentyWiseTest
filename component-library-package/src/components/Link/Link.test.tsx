import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { Link } from './Link';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('Link', () => {
  it('renders children', () => {
    renderWithProvider(<Link to="/test">Click me</Link>);

    const link = screen.getByText('Click me');

    expect(link).toBeInTheDocument();
  });

  it('renders as an anchor with href', () => {
    renderWithProvider(<Link to="/test">Click me</Link>);

    const link = screen.getByText('Click me');

    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('renders with a custom component', () => {
    const CustomLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
      <a href={to} data-custom="true">{children}</a>
    );

    renderWithProvider(<Link to="/test" component={CustomLink}>Click me</Link>);

    const link = screen.getByText('Click me');

    expect(link).toHaveAttribute('data-custom', 'true');
    expect(link).toHaveAttribute('href', '/test');
  });
});
