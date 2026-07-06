import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { PageContent } from './PageContent';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
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
