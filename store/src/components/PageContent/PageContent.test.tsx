import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LibraryProvider } from '@local/components';
import { PageContent } from './PageContent';

function renderWithProvider(ui: React.ReactElement) {
  return render(<LibraryProvider>{ui}</LibraryProvider>);
}

describe('PageContent', () => {
  it('renders children', () => {
    renderWithProvider(
      <PageContent>
        <span>child content</span>
      </PageContent>,
    );

    const child = screen.getByText('child content');

    expect(child).toBeInTheDocument();
  });
});
