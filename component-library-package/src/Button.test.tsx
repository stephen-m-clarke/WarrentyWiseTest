import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { Button } from './Button';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('Button', () => {
  it('renders children', () => {
    renderWithProvider(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    renderWithProvider(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders a button element', () => {
    renderWithProvider(<Button>Test</Button>);
    expect(screen.getByRole('button').tagName).toBe('BUTTON');
  });
});
