import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { Slider } from './Slider';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('Slider', () => {
  it('renders with default value', () => {
    const { container } = renderWithProvider(
      <Slider defaultValue={50} min={0} max={100} />,
    );

    const slider = container.querySelector('[role="slider"]');

    expect(slider).toBeInTheDocument();
  });

  it('renders marks when provided', () => {
    renderWithProvider(
      <Slider
        defaultValue={50}
        marks={[
          { value: 0, label: '0' },
          { value: 100, label: '100' },
        ]}
      />,
    );

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('renders with a label and current value', () => {
    renderWithProvider(
      <Slider label="Price Range" defaultValue={50} />,
    );

    expect(screen.getByText('Price Range')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
  });

  it('renders value with prefix', () => {
    renderWithProvider(
      <Slider label="Price" valuePrefix="$" defaultValue={99} />,
    );

    expect(screen.getByText('$99')).toBeInTheDocument();
  });

  it('renders value with suffix', () => {
    renderWithProvider(
      <Slider label="Volume" valueSuffix="%" defaultValue={75} />,
    );

    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('renders value with prefix and suffix', () => {
    renderWithProvider(
      <Slider label="Range" valuePrefix="[" valueSuffix="]" defaultValue={50} />,
    );

    expect(screen.getByText('[50]')).toBeInTheDocument();
  });
});
