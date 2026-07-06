import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { TabGroup } from './TabGroup';
import { Tabs } from '@mantine/core';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('TabGroup', () => {
  it('renders with default tab selected', () => {
    renderWithProvider(
      <TabGroup defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab One</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab Two</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Panel One</Tabs.Panel>
        <Tabs.Panel value="tab2">Panel Two</Tabs.Panel>
      </TabGroup>,
    );
    expect(screen.getByText('Tab One')).toBeInTheDocument();
    expect(screen.getByText('Tab Two')).toBeInTheDocument();
  });

  it('calls onChange when a tab is clicked', () => {
    const handleChange = jest.fn();
    renderWithProvider(
      <TabGroup defaultValue="tab1" onChange={handleChange}>
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab One</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab Two</Tabs.Tab>
        </Tabs.List>
      </TabGroup>,
    );
    fireEvent.click(screen.getByText('Tab Two'));
    expect(handleChange).toHaveBeenCalledWith('tab2');
  });
});
