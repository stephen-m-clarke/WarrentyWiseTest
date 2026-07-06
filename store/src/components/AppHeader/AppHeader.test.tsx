import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { AppHeader } from './AppHeader';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('AppHeader', () => {
  it('renders the store title', () => {
    renderWithProvider(<AppHeader />);

    const title = screen.getByText('Store App');

    expect(title).toBeInTheDocument();
  });
});
