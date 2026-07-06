import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { TextInput } from './TextInput';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('TextInput', () => {
  it('renders label', () => {
    renderWithProvider(<TextInput label="Name" />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('accepts input value', () => {
    renderWithProvider(<TextInput label="Name" value="John" readOnly />);
    expect(screen.getByLabelText('Name')).toHaveValue('John');
  });

  it('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    renderWithProvider(<TextInput label="Name" onChange={handleChange} />);
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
