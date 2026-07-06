import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { StarRating } from './StarRating';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('StarRating', () => {
  it('renders the numeric rate', () => {
    renderWithProvider(<StarRating rate={4.5} />);

    const rate = screen.getByText('4.5');

    expect(rate).toBeInTheDocument();
  });

  it('renders five star characters', () => {
    const { container } = renderWithProvider(<StarRating rate={4.5} />);

    const starTexts = container.querySelectorAll('span');

    expect(starTexts.length).toBeGreaterThanOrEqual(5);
  });

  it('fills stars up to the floor of the rate', () => {
    const { container } = renderWithProvider(<StarRating rate={3.5} />);

    const stars = container.querySelectorAll('span');

    let filledCount = 0;
    let emptyCount = 0;
    stars.forEach((star) => {
      const color = window.getComputedStyle(star).color;
      if (color === 'rgb(245, 159, 0)') filledCount++;
      if (color === 'rgb(222, 226, 230)') emptyCount++;
    });

    expect(filledCount).toBe(3);
    expect(emptyCount).toBeGreaterThanOrEqual(2);
  });
});
