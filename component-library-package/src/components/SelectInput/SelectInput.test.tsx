import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { SelectInput } from './SelectInput';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('SelectInput', () => {
  it('renders label', () => {
    renderWithProvider(<SelectInput label="Choose" data={['A', 'B']} />);

    const label = screen.getByText('Choose');

    expect(label).toBeInTheDocument();
  });

  it('renders options', () => {
    renderWithProvider(<SelectInput label="Choose" data={['A', 'B']} />);

    const optionA = screen.getByText('A');
    const optionB = screen.getByText('B');

    expect(optionA).toBeInTheDocument();
    expect(optionB).toBeInTheDocument();
  });

  it('calls onChange when an option is selected', () => {
    const handleChange = vi.fn();
    renderWithProvider(<SelectInput label="Choose" data={['A', 'B']} onChange={handleChange} />);

    fireEvent.click(screen.getByText('A'));

    expect(handleChange).toHaveBeenCalledWith('A', { label: 'A', value: 'A' });
  });
});
