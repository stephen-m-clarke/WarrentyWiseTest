import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LibraryProvider } from '@local/components';
import { AppHeader } from './AppHeader';

function renderWithProvider(ui: React.ReactElement) {
  return render(<LibraryProvider>{ui}</LibraryProvider>);
}

describe('AppHeader', () => {
  it('renders the store title', () => {
    renderWithProvider(<AppHeader />);

    const title = screen.getByText('Store App');

    expect(title).toBeInTheDocument();
  });
});
