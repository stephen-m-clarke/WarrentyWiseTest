import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { LibraryProvider } from '@local/components';

const preview: Preview = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <LibraryProvider>
          <Story />
        </LibraryProvider>
      </MemoryRouter>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    }
  },
};

export default preview;
