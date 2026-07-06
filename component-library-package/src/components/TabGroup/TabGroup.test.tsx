import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { TabGroup } from './TabGroup';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('TabGroup', () => {
  it('renders tabs with labels', () => {
    renderWithProvider(
      <TabGroup
        defaultValue="tab1"
        tabs={[
          { value: 'tab1', label: 'Tab One' },
          { value: 'tab2', label: 'Tab Two' },
        ]}
      />,
    );

    const tabOne = screen.getByText('Tab One');
    const tabTwo = screen.getByText('Tab Two');

    expect(tabOne).toBeInTheDocument();
    expect(tabTwo).toBeInTheDocument();
  });

  it('renders content for the default tab', () => {
    renderWithProvider(
      <TabGroup
        defaultValue="tab1"
        tabs={[
          { value: 'tab1', label: 'Tab One', content: <span>Panel One</span> },
          { value: 'tab2', label: 'Tab Two', content: <span>Panel Two</span> },
        ]}
      />,
    );

    expect(screen.getByText('Panel One')).toBeInTheDocument();
    expect(screen.getByText('Panel Two')).toBeInTheDocument();
  });

  it('calls onChange when a tab is clicked', () => {
    const handleChange = vi.fn();
    renderWithProvider(
      <TabGroup
        defaultValue="tab1"
        tabs={[
          { value: 'tab1', label: 'Tab One' },
          { value: 'tab2', label: 'Tab Two' },
        ]}
        onChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByText('Tab Two'));

    expect(handleChange).toHaveBeenCalledWith('tab2');
  });
});
